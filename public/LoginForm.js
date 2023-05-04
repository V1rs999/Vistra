import _regeneratorRuntime from "babel-runtime/regenerator";

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var form1 = document.getElementById("form1");
var email1 = document.getElementById("email");
var pass = document.getElementById("pass1");

form1.addEventListener("submit", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
    var email, password, response, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            email = document.getElementById("email").value;
            password = document.getElementById("pass1").value;
            _context.prev = 3;
            _context.next = 6;
            return fetch("/auth/Login", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                email: email,
                password: password
              })
            });

          case 6:
            response = _context.sent;
            _context.next = 9;
            return response.json();

          case 9:
            data = _context.sent;

            console.log(data);
            if (response.ok) {
              window.location.href = "/home";
            }

            document.getElementById("email").value = "";
            document.getElementById("pass1").value = "";
            validateInputs1();
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](3);

            console.error(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this, [[3, 17]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());

var setError1 = function setError1(element, message) {
  var inputControl = element.parentElement;
  var errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

var setSuccess1 = function setSuccess1(element) {
  var inputControl = element.parentElement;
  var errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

var isValidEmail1 = function isValidEmail1(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

var validateInputs1 = function validateInputs1() {
  // trim to remove the whitespaces
  var emailValue1 = email1.value.trim();
  var passwordValue1 = pass.value.trim();

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

"use strict";
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.overlay');
var btnCloseModal = document.querySelector('.close-modal');
var btnsOpenModal = document.querySelectorAll('.show-modal');

var openModal = function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

var closeModal = function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
for (var i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

var escape = document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  } else {
    console.log(e.key);
  }
});

var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tab_items = document.querySelectorAll(".tab_item");

tab_lists.forEach(function (list) {
  list.addEventListener("click", function () {
    var tab_data = list.getAttribute("data-tc");

    tab_lists.forEach(function (list) {
      list.classList.remove("active");
    });
    list.classList.add("active");

    tab_items.forEach(function (item) {
      var tab_class = item.getAttribute("class").split(" ");
      if (tab_class.includes(tab_data)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});