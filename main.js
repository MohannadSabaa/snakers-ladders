import { roleBtn, resetBtn, en, ar } from "./js/dom.js";
import { gameController, resetController } from "./js/gameControllers.js";
import { englishUIHandler, arabicUIHandler } from "./js/languageControllers.js";
import numbers from "./js/elementsArray.js";
const boxes = Array.from(document.querySelectorAll(".box")).sort(
  (a, b) => +a.id - Number(b.id)
);
const role = roleBtn.target[0];
const reset = resetBtn.target[0];

en.addEventListener("click", englishUIHandler);
ar.addEventListener("click", arabicUIHandler);
role.addEventListener("click", gameController);
reset.addEventListener("click", resetController);

export { boxes };
