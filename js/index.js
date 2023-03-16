`use strict`;

function togglePasswordVisibility(pass) {
  var passwordInput = document.getElementById(pass);
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}
