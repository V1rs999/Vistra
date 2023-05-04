//! Форма регістрації\авторизації
"use strict";

function togglePasswordVisibility(passwordId) {
  var passwordField = document.getElementById(passwordId);
  var showPasswordButton = document.getElementById("show-" + passwordId);

  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordButton.innerHTML = '<img class="hide" src="../img/icons8-eye-50.svg">';
  } else {
    passwordField.type = "password";
    showPasswordButton.innerHTML = '<img class="hide" src="../img/icons8-eye-64.svg">';
  }
}