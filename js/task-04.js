let counterValue = 0;

const buttonHandler = (increment) => {
  if (increment) {
    counterValue = counterValue + 1;
  } else {
    counterValue = counterValue - 1;
  }

  updateSpanValue();
};

const updateSpanValue = () => {
  const spanValue = document.querySelector("span");
  spanValue.textContent = counterValue;
};

const incrementButton = document.querySelector("[data-action=increment]");
const decrementButton = document.querySelector("[data-action=decrement]");

incrementButton.addEventListener("click", () => buttonHandler(true));
decrementButton.addEventListener("click", () => buttonHandler(false));
