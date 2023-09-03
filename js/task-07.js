const input = document.querySelector("#font-size-control");

const onInputChange = (e) => {
  const span = document.getElementById("text");
  span.style.fontSize = e.target.value + "px";
};

input.addEventListener("input", (e) => onInputChange(e));
