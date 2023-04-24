// const { set } = require("mongoose");
// const { validate } = require("uuid");

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


//
// const form = document.getElementById('form');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const pass1 = document.getElementById('pass1');
// const pass2 = document.getElementById('pass2');

// form.addEventListener('submit', e => {
// 	e.preventDefault();
	
// 	validateInputs();
// });

// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error')

//   errorDisplay.innerText = message;
//   inputControl.classList.add('error');
//   inputControl.classList.remove('success');
// }

// const setSuccess = element => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.querySelector('.error')

//   errorDisplay.innerText = '';
//   inputControl.classList.add('success');
//   inputControl.classList.remove('error');
// }

// const isValidEmail= email => {
// 	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }


// const validateInputs = () => {
// 	// trim to remove the whitespaces
// 	const usernameValue = username.value.trim();
// 	const emailValue = email.value.trim();
// 	const passwordValue = pass1.value.trim();
// 	const password2Value = pass2.value.trim();
	
// 	if(usernameValue === '') {
// 		setError(username, 'Username is required');
// 	} else {
// 		setSuccess(username);
// 	}
	
// 	if(emailValue === '') {
// 		setError(email, 'Email is required');
// 	} else if (!isValidEmail(emailValue)) {
// 		setError(email, 'Not a valid email address');
// 	} else {
// 		setSuccess(email);
// 	}
	
// 	if(passwordValue === '') {
// 		setError(pass1, 'Password is required');
// 	} else if (passwordValue < 8) {
// 		setError(pass1, 'Password must be at least 8 character.');
// 	} else {
//     setSuccess(pass1);
//   }
	
// 	if(password2Value === '') {
// 		setError(pass2, 'Please confirm your password');
// 	} else if (password2Value !== passwordValue) {
// 		setError(pass2, "Passwords doesn't match");
// 	} else {
// 		setSuccess(pass2);
// 	}
// }


const form1 = document.getElementById('form1');
const email1 = document.getElementById('email');
const pass = document.getElementById('pass1');
form1.addEventListener('submit', e => {
	e.preventDefault();
	
	validateInputs1();
});

const setError1 = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
}

const setSuccess1 = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error')

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
}

const isValidEmail1= email => {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}


const validateInputs1 = () => {
	// trim to remove the whitespaces
	const emailValue1 = email1.value.trim();
	const passwordValue1 = pass.value.trim();
	
	if(emailValue1 === '') {
		setError1(email1, 'Email is required');
	} else if (!isValidEmail1(emailValue1)) {
		setError1(email1, 'Not a valid email address');
	} else {
		setSuccess1(email1);
	}
	
	if(passwordValue1 === '') {
		setError1(pass, 'Password is required');
	} else if (passwordValue1 < 8) {
		setError1(pass, 'Password must be at least 8 character.');
	} else {
    setSuccess1(pass);
  }
}
	
	