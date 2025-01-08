import {
  roleBtn,
  playersEl,
  messageEl,
  alert,
  pointersContainer,
  ar,
  en,
} from "./dom.js";
import {
  arabicUIHandler,
  englishUIHandler,
  language,
} from "./languageControllers.js";
import { boxes } from "../main.js";
import { stepAccelerator } from "./pointerControllers.js";
import { exceptions, players } from "./variables.js";

const {
  target: [roll],
} = roleBtn;

const settings = {
  game: true,
  active: 0,
  stepSpeed: 0,
  actionInterval: 0,
};

const switchPlayer = () =>
  settings.active === 0 ? (settings.active = 1) : (settings.active = 0);

const stepController = () => {
  if (
    players[settings.active].nextStep < 100 &&
    players[settings.active].nextStep !== 78
  ) {
    for (let key in exceptions) {
      const keyValue = `${key === "snake" ? "up" : "down"}`;

      if (
        exceptions[key][keyValue].includes(players[settings.active].nextStep)
      ) {
        const index = exceptions[key][keyValue].indexOf(
          players[settings.active].nextStep
        );

        players[settings.active].nextStep =
          exceptions[key][`${keyValue === "up" ? "down" : "up"}`][index];

        boxes[players[settings.active].nextStep - 1].append(
          players[settings.active].pointer
        );
      }
    }
    settings.stepSpeed = 0;
    switchPlayer();

    alert.switchLanguage(
      language,
      0,
      `${settings.active + 1} دورة اللاعب`,
      `P${settings.active + 1} Turn`
    );
    roll.addEventListener("click", gameController);
    return;
  }
  players[settings.active].nextStep = 99;
  messageEl.classList.remove("hidden");
  boxes[players[settings.active].nextStep].append(
    players[settings.active].pointer
  );
  alert.switchLanguage(
    language,
    0,
    `لقد فعلتها!، أنت ربحت`,
    `Coagulations, You Won!`
  );
  roll.addEventListener("click", gameController);
  settings.game = false;
};

const gameController = () => {
  if (settings.game) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    players[settings.active].nextStep += dice;
    players[settings.active].previousStep =
      players[settings.active].nextStep - dice;
    ar.removeEventListener("click", arabicUIHandler);
    en.removeEventListener("click", englishUIHandler);
    roll.removeEventListener("click", gameController);
    playersEl.switchLanguage(
      language,
      settings.active,
      `النرد | ${dice}`,
      `${dice} | DICE`
    );
    alert.switchLanguage(
      language,
      0,
      `اللاعب ${settings.active + 1} مازال يلعب`,
      `P${settings.active + 1} is playing`
    );

    if (players[settings.active].nextStep > 100) {
      alert.switchLanguage(language, 0, `حاول مرة أخرى`, `Try Again!`);
      players[settings.active].nextStep = players[settings.active].previousStep;
      switchPlayer();
      roll.addEventListener("click", gameController);
      return;
    }
    stepAccelerator(players[settings.active]);
    setTimeout(stepController, settings.actionInterval + 500);
  }
};
const resetController = () => {
  if (!settings.game) {
    settings.game = true;
    settings.active = 0;
    ar.addEventListener("click", arabicUIHandler);
    en.addEventListener("click", englishUIHandler);
    players.forEach((player) => (player.nextStep = player.previousStep = 0));
    document.querySelectorAll(".pointer").forEach((pt) => {
      messageEl.classList.add("hidden");
      pt.classList.remove("absolute");
      pointersContainer.append(pt);
    });
  }
};

export { gameController, resetController, settings };
