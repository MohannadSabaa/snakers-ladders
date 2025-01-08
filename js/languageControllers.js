import { roleBtn, resetBtn, playersEl, alert } from "./dom.js";

let language = "en";

const englishUIHandler = () => {
  language = "en";
  roleBtn.switchLanguage(language, 0, "", "START");
  resetBtn.switchLanguage(language, 0, "", "RESET");
  alert.switchLanguage(language, 0, "", "Let's Go!");
  playersEl.target.forEach((t, i) =>
    playersEl.switchLanguage(language, i, "", "DICE")
  );
};
const arabicUIHandler = () => {
  language = "ar";
  resetBtn.switchLanguage(language, 0, "إعادة");
  roleBtn.switchLanguage(language, 0, "ابدأ");
  alert.switchLanguage(language, 0, "هيا لنبدأ");
  playersEl.target.forEach((t, i) =>
    playersEl.switchLanguage(language, i, "النرد")
  );
};

export { englishUIHandler, arabicUIHandler, language };
