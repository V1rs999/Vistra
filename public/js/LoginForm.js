const form1 = document.getElementById("form1");
const email1 = document.getElementById("email");
const pass = document.getElementById("pass1");

form1.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("pass1").value;
  try {
    const response = await fetch("/auth/Login", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await response.json();
    if (response.ok) {
      console.log(data.userId);
      // Збереження об'єкту в локальне сховище після перетворення на рядок JSON
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("userId", JSON.stringify(data.userId));
      window.location.href = "/home";
    }

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

`use strict`;
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// const escape = document.addEventListener("keydown", function (e) {
//   if (e.key === "Escape" && !modal.classList.contains("hidden")) {
//     closeModal();
//   } else {
//     console.log(e.key);
//   }
// });

const tab_lists = document.querySelectorAll(".tabs_list ul li");
const tab_items = document.querySelectorAll(".tab_item");

tab_lists.forEach(function(list) {
  list.addEventListener("click", function() {
    const tab_data = list.getAttribute("data-tc");

    tab_lists.forEach(function(list) {
      list.classList.remove("active");
    });
    list.classList.add("active");

    tab_items.forEach(function(item) {
      const tab_class = item.getAttribute("class").split(" ");
      if (tab_class.includes(tab_data)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
