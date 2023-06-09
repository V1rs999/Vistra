//! Форма регістрації\авторизації
`use strict`;

function togglePasswordVisibility(passwordId) {
  const passwordField = document.getElementById(passwordId);
  const showPasswordButton = document.getElementById(`show-${passwordId}`);

  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordButton.innerHTML =
      "<img class=\"hide\" src=\"../img/icons8-eye-50.svg\" alt=\"\">";
  } else {
    passwordField.type = "password";
    showPasswordButton.innerHTML =
      "<img class=\"hide\" src=\"../img/icons8-eye-64.svg\" alt=\"\">";
  }
}
