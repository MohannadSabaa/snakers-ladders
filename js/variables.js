import { playerOnePointer, playerTwoPointer } from "./dom.js";

const players = [
  { previousStep: 0, nextStep: 0, pointer: playerOnePointer },
  { previousStep: 0, nextStep: 0, pointer: playerTwoPointer },
];
const exceptions = {
  ladder: {
    down: [1, 6, 11, 21, 24, 35, 51, 73],
    up: [38, 16, 49, 60, 87, 47, 67, 93],
  },
  snake: {
    down: [4, 9, 26, 53, 19, 42, 28, 71, 75, 80],
    up: [14, 31, 44, 56, 62, 64, 84, 91, 95, 98],
  },
};

export { players, exceptions };
