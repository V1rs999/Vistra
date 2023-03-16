function togglePasswordVisibility() {
  var passwordInput = document.querySelectorAll(".password");
  for (const i of [...passwordInput]) {
    if (i.type === "password") {
      i.type = "text";
    } else {
      i.type = "password";
    }
  }
}
