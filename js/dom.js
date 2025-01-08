import { Target } from "./classes.js";

const resetBtn = new Target("#reset", "إعادة", "RESET");
const playerOneDice = new Target(".player_1_dice");
const playerTwoDice = new Target(".player_2_dice");
const playersEl = new Target(".player");
const roleBtn = new Target("#role", "ابدأ", "START");
const pointersContainer = document.querySelector(".pointers-wrapper");
const pointer = document.querySelector(".pointer");
const playerOnePointer = document.querySelector(".pa");
const playerTwoPointer = document.querySelector(".pb");
const messageEl = document.querySelector(".message");
const board = document.querySelector(".board");
const alert = new Target(".alert");
const ar = document.getElementById("ar");
const en = document.getElementById("en");
export {
  ar,
  en,
  roleBtn,
  resetBtn,
  pointer,
  board,
  messageEl,
  alert,
  playersEl,
  playerOneDice,
  playerTwoDice,
  playerOnePointer,
  playerTwoPointer,
  pointersContainer,
};
