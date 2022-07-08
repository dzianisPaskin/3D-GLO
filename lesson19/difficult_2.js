const square = document.querySelector(".square");
const startBtn = document.querySelector(".start");
const resetBtn = document.querySelector(".reset");

let count = 0;
let idInterval;
let active = false;

const move = () => {
  count++;
  idInterval = requestAnimationFrame(move);
  square.style.marginLeft = count + "px";
};

startBtn.addEventListener("click", () => {
  if (active) {
    cancelAnimationFrame(idInterval);
    active = false;
  } else {
    idInterval = requestAnimationFrame(move);
    active = true;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  square.style.marginLeft = count + "px";
  cancelAnimationFrame(idInterval)
});
