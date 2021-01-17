// DOM elements
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordtwo = document.getElementById("passwordtwo");

// Event listener on form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkRequired([username, email, password, passwordtwo]);
  checkEmail(email);
  checkLength(username, 4, 12);
  checkLength(password, 8, 20);
  checkPasswordMatch(password, passwordtwo);
});

// Function to check password match
function checkPasswordMatch(pwd1, pwd2) {
  if (pwd1.value !== pwd2.value) {
    displayError(pwd2, "Passwords doesnt match");
  }
}

// Function to check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    displayError(input, `${getField(input)} must be atleast ${min} characters`);
  } else if (input.value.length > max) {
    displayError(
      input,
      `${getField(input)} must be less than ${max} characters`
    );
  } else {
    displaySuccess(input);
  }
}

// Function to check field requirements
function checkRequired(inputArr) {
  inputArr.forEach((input) => {
    if (input.value === "") {
      displayError(input, `${getField(input)}  is required`);
    } else {
      displaySuccess(input);
    }
  });
}

// Function to validate email address
function checkEmail(input) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(input.value).toLowerCase())) {
    displaySuccess(input);
  } else {
    displayError(input, "Email is not valid");
  }
}

// Function to display error message and red input border
function displayError(input, message) {
  const formBox = input.parentElement;
  formBox.className = "form-box error";
  const p = formBox.querySelector("p");
  p.innerText = message;
}

// Function to display success message and green input border
function displaySuccess(input) {
  const formBox = input.parentElement;
  formBox.className = "form-box success";
}

// Function to get the input field name
function getField(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
