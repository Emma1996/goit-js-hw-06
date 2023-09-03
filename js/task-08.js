const form = document.querySelector(".login-form");

const onFormSubmit = (e) => {
  const formInputs = document.querySelectorAll("input");

  const validObject = {};

  formInputs.forEach((input) => {
    if (input.value) {
      validObject[input.getAttribute("type")] = input.value;
    }
  });

  if (!validObject || Object.keys(validObject).length != formInputs.length) {
    alert("All fields are mandatory");
  } else {
    console.log("Valid object was submited: ", validObject);
    form.reset();
  }

  e.preventDefault();
};

form.addEventListener("submit", (e) => onFormSubmit(e));
