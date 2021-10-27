const form = document.querySelector("form[name='form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const messageInput = document.querySelector("textarea[name='message']");
const gracias = document.querySelector(".gracias")

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
messageInput.isValid = () => !!messageInput.value;


const inputFields = [nameInput, emailInput, messageInput];

const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("oculto");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("oculto");
    }
  });
};

inputFields.forEach((input) => input.addEventListener("input", validateInputs));


form.addEventListener("submit", (e) => {
    e.preventDefault();
    shouldValidate = true;
    validateInputs();
    if (isFormValid) {
    form.remove();
    gracias.classList.remove("oculto");
  }
  });


