import { settings } from "./gameControllers.js";
import { boxes } from "../main.js";

const changePointerPosition = (pointer) => {
  pointer.classList.contains("absolute")
    ? -1
    : pointer.classList.add("absolute");
  pointer.classList.contains("bounce") ? -1 : pointer.classList.add("bounce");
};
const stepAccelerator = ({ previousStep, nextStep, pointer }) => {
  for (let i = previousStep; i < nextStep; i++) {
    settings.stepSpeed += 500;
    settings.actionInterval = settings.stepSpeed;
    setTimeout(() => {
      changePointerPosition(pointer);
      boxes[i].append(pointer);
    }, settings.stepSpeed);
  }
};
export { stepAccelerator };
