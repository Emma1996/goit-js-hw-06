const input = document.querySelector("#validation-input");

const onInputBlur = (e) => {
  const dataLength = input.getAttribute("data-length");
  if (Number.parseInt(dataLength) === e.target.value.length) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
};

input.addEventListener("blur", (e) => onInputBlur(e));
