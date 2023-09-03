function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onClick = () => {
  const newColor = getRandomHexColor();
  const span = document.querySelector(".color");
  span.textContent = newColor;
  document.querySelector("body").style.backgroundColor = newColor;
};
const button = document.querySelector(".change-color");
button.addEventListener("click", onClick);
