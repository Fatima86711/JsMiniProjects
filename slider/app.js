const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img = document.querySelector(".images");
const image = document.querySelectorAll(".image");
let counter = 0;
function moveRight() {
  img.style.transform = `translateX(${-800 * counter}px)`;

  return;
}

right.addEventListener("click", () => {
  if (counter < image.length - 1) {
    counter++;
    moveRight();
  } else {
    counter = 0;
    moveRight();
  }
});
function moveLeft() {
  img.style.transform = `translateX(${-800 * counter}px)`;

  return;
}

left.addEventListener("click", () => {
  if (counter > 0) {
    counter--;
    moveLeft();
  } else {
    counter = image.length - 1;
    moveLeft();
  }
});
