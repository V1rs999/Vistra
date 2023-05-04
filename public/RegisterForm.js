import _regeneratorRuntime from "babel-runtime/regenerator";

var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var form = document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var pass1 = document.getElementById("pass1");
var pass2 = document.getElementById("pass2");

form.addEventListener("submit", function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(e) {
    var email, username, password, response, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();
            email = document.getElementById("email").value;
            username = document.getElementById("username").value;
            password = document.getElementById("pass1").value;
            _context.prev = 4;
            _context.next = 7;
            return fetch("/auth/registration", {
              method: "post",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                username: username,
                email: email,
                password: password
              })
            });

          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.json();

          case 10:
            data = _context.sent;

            console.log(data);
            if (response.ok) {
              window.location.href = "/Login";
            }

            document.getElementById("username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("pass1").value = "";
            validateInputs();
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](4);

            console.error(_context.t0);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, _this, [[4, 19]]);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}());
var setError = function setError(element, message) {
  var inputControl = element.parentElement;
  var errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

var setSuccess = function setSuccess(element) {
  var inputControl = element.parentElement;
  var errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

var isValidEmail = function isValidEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

var validateInputs = function validateInputs() {
  // trim to remove the whitespaces
  var usernameValue = username.value.trim();
  var emailValue = email.value.trim();
  var passwordValue = pass1.value.trim();
  var password2Value = pass2.value.trim();

  if (usernameValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Not a valid email address");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(pass1, "Password is required");
  } else if (passwordValue < 8) {
    setError(pass1, "Password must be at least 8 character.");
  } else {
    setSuccess(pass1);
  }

  if (password2Value === "") {
    setError(pass2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(pass2, "Passwords doesn't match");
  } else {
    setSuccess(pass2);
  }
};