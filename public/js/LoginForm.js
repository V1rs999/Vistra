const form1 = document.getElementById("form1");
const email1 = document.getElementById("email");
const pass = document.getElementById("pass1");

form1.addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = document.getElementById("email").value;
  const password = document.getElementById("pass1").value;
  try {
    const response = await fetch("/auth/Login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    document.getElementById("email").value = "";
    document.getElementById("pass1").value = "";
    validateInputs1();
  } catch (err) {
    console.error(err);
  }
});

const setError1 = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess1 = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail1 = (email) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs1 = () => {
  // trim to remove the whitespaces
  const emailValue1 = email1.value.trim();
  const passwordValue1 = pass.value.trim();

  if (emailValue1 === "") {
    setError1(email1, "Email is required");
  } else if (!isValidEmail1(emailValue1)) {
    setError1(email1, "Not a valid email address");
  } else {
    setSuccess1(email1);
  }

  if (passwordValue1 === "") {
    setError1(pass, "Password is required");
  } else if (passwordValue1 < 8) {
    setError1(pass, "Password must be at least 8 character.");
  } else {
    setSuccess1(pass);
  }
};
