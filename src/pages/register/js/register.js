const formElement = document.getElementById("form");
const inputElements = document.querySelectorAll("input");

const validationMessages = {
  email: "O e-mail deve conter um '@' e um '.'",
  phone_number: "O número deve ter o formato (xx) xxxxx-xxxx.",
};

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

const updateElementStatus = (element, status, messageError = "") => {
  const inputContainer = element.parentElement;
  const invalidMessage = inputContainer.querySelector(".invalid_message");
  inputContainer.classList.add(status);
  inputContainer.classList.remove(status === "success" ? "invalid" : "success");
  invalidMessage.style.display = status === "success" ? "none" : "inline";
  if (messageError) {
    invalidMessage.innerText = messageError;
  }
};

const validateEmail = (input) => {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(input.value.trim());
};

const validatePhoneNumber = (input) => {
  const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
  return phoneRegex.test(input.value.trim());
};

const validateForm = () => {
  let isFormValid = true;

  inputElements.forEach((input) => {
    const value = input.value.trim();

    if (value === "") {
      updateElementStatus(input, "invalid");
      isFormValid = false;
    } else if (input.id === "email" && !validateEmail(input)) {
      updateElementStatus(input, "invalid", validationMessages.email);
      isFormValid = false;
    } else if (input.id === "phone_number" && !validatePhoneNumber(input)) {
      updateElementStatus(input, "invalid", validationMessages.phone_number);
      isFormValid = false;
    } else {
      updateElementStatus(input, "success");
    }
  });

  if (isFormValid) {
    formElement.submit();
    alert(
      "Cadastro enviado! estamos ansiosos para ajudá-lo a transformar a esperança em realidade e criar um lar para você e sua família. Entraremos em contato em breve com mais informações."
    );
  }
};
