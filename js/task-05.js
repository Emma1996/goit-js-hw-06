const updateSpanValue = (e) => {
  const spanValue = document.querySelector("#name-output");
  spanValue.textContent = e.target.value || "Anonymous";
};

const input = document.querySelector("#name-input");

input.addEventListener("input", (e) => updateSpanValue(e));
