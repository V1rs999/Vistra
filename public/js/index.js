const { set } = require("mongoose");
const { validate } = require("uuid");

//! Форма регістрації\авторизації
`use strict`;
function togglePasswordVisibility(passwordId) {
  const passwordField = document.getElementById(passwordId);
  const showPasswordButton = document.getElementById(`show-${passwordId}`);

  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordButton.innerHTML =
      '<img class="hide" src="../img/icons8-eye-50.svg">';
  } else {
    passwordField.type = "password";
    showPasswordButton.innerHTML =
      '<img class="hide" src="../img/icons8-eye-64.svg">';
  }
}

const password1 = document.getElementById("pass1");
const password2 = document.getElementById("pass2");
const registerButton = document.querySelector(".Register");

registerButton.addEventListener("click", () => {
  if (password1.value !== password2.value) {
    alert("Паролі не співпадають");
  }
});

// const form = document.getElementById('form');
// const pass1 = document.getElementById('pass1');
// const pass2 = document.getElementById('pass2');

// form.addEventListener('submit', e=> {
//   e.preventDefault();

//   validateInputs();
// });

// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success');
// };

// const setSuccess = element => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error');

//   errorDisplay.innerText = '';
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');
// };

// const validateInputs = () => {
//   const pass1Value = pass1.value.trim();
//   const pass2Value = pass2.value.trim();

//   if (pass1Value === '') {
//     setError(pass1, 'Password is required');
//   } else if (pass1Value.length < 8 ) {
//     setError(pass1, 'Password must be at least 8 characters');
//   } else {
//     setSuccess(pass1);
//   }

//   if (pass2Value === '') {
//     setError(pass2, 'Please confirm your password');
//   } else if (pass1Value !== pass2Value) {
//     setError(pass2, "Passwords don't match");
//   } else {
//     setSuccess(pass2);
//   }
// };