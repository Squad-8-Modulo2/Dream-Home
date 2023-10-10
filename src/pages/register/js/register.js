const form = document.getElementById("form");
const firstNameInput = document.getElementById("first_name");
const lastNameInput = document.getElementById("last_name");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone_number");
const cepInput = document.getElementById("CEP");
const addressInput = document.getElementById("address");
const neighborhoodInput = document.getElementById("neighborhood");
const cityInput = document.getElementById("city");
const stateInput = document.getElementById("state");
const houseNumberInput = document.getElementById("house_number");
const storyInput = document.getElementById("story");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
});

const validateForm = () => {
  const firstNameValue = firstNameInput.value.trim()
};
