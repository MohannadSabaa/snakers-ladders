import { board } from "./dom.js";

let numbers = [];
let slice = [];
for (let i = 1; i <= 101; i++) {
  if (slice.length < 10) {
    slice.push(i);
  } else {
    i--;
    numbers.push(slice);
    slice = [];
  }
}
numbers = numbers
  .map((slice, i) => (i % 2 === 0 ? slice.reverse() : slice))
  .flat()
  .reverse()
  .map((number) => {
    const box = document.createElement("li");
    box.id = number;
    box.classList.add("box");
    board.append(box);
  });
export default numbers;
