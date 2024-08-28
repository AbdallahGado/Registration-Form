const form = document.getElementById("form");
const userNameInput = document.querySelector(".username");
const userEmailInput = document.querySelector(".useremail");
const passwordInput = document.querySelector(".password");
const confirmPassInput = document.querySelector(".cpassword");

form.addEventListener("submit", (a) => {
  a.preventDefault();
  validateInput();
});

const showError = (element, message) => {
  const inputControl = element.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = message;
  inputControl.classList.add("errorMessage");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorMessage = inputControl.querySelector(".error");
  errorMessage.innerText = "";
  inputControl.classList.remove("errorMessage");
  inputControl.classList.add("success");
};

const isValidEmail = (email) => {
  const reTest =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reTest.test(String(email).toLowerCase());
};

const validateInput = () => {
  const userName = userNameInput.value.trim();
  const email = userEmailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPass = confirmPassInput.value.trim();

  if (userName === "") {
    showError(userNameInput, "Please enter a username!");
  } else {
    setSuccess(userNameInput);
  }

  if (email === "") {
    showError(userEmailInput, "Please enter an email!");
  } else if (!isValidEmail(email)) {
    showError(userEmailInput, "Please enter a valid email!");
  } else {
    setSuccess(userEmailInput);
  }

  if (password === "") {
    showError(passwordInput, "Please enter a password!");
  } else if (password.length < 8) {
    showError(passwordInput, "Password must be at least 8 characters!");
  } else {
    setSuccess(passwordInput);
  }

  if (confirmPass === "") {
    showError(confirmPassInput, "Please confirm your password!");
  } else if (password !== confirmPass) {
    showError(confirmPassInput, "Passwords do not match!");
  } else {
    setSuccess(confirmPassInput);
  }
};
