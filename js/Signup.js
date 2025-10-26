
const form = document.querySelector("form");
const uname = document.querySelector(".name-in");
const mail = document.querySelector(".email-in");
const pwd = document.querySelector(".pass-in");
const cpwd = document.querySelector(".cpass-in");


function showError(input, msg) {
  input.classList.add("invalid");


  let errorEl = input.nextElementSibling;
  if (!errorEl || errorEl.tagName.toLowerCase() !== "small") {
    errorEl = document.createElement("small");
    input.insertAdjacentElement("afterend", errorEl);
  }

  errorEl.textContent = msg;
  errorEl.classList.add("error-msg");
}
 
function clearError(input) {
  input.classList.remove("invalid");
  const errorEl = input.nextElementSibling;
  if (errorEl && errorEl.tagName.toLowerCase() === "small") {
    errorEl.textContent = "";
  }
}


function validateUsername() {
  clearError(uname);
  if (uname.value.trim().length < 3) {
    showError(uname, "Username must be at least 3 characters.");
    return false;
  }
  return true;
}

function validateEmail() {
  clearError(mail);
  const re = /\S+@\S+\.\S+/;
  if (!re.test(mail.value.trim())) {
    showError(mail, "Please enter a valid email.");
    return false;
  }
  return true;
}

function validatePassword() {
  clearError(pwd);
  if (pwd.value.length < 6) {
    showError(pwd, "Password must be at least 6 characters.");
    return false;
  }
  return true;
}

function validateConfirm() {
  clearError(cpwd);
  if (cpwd.value !== pwd.value) {
    showError(cpwd, "Passwords do not match.");
    return false;
  }
  return true;
}


uname.addEventListener("input", validateUsername);
mail.addEventListener("input", validateEmail);
pwd.addEventListener("input", validatePassword);
cpwd.addEventListener("input", validateConfirm);


form.addEventListener("submit", function (e) {
  e.preventDefault();
  const valid =
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirm();

  if (valid) {
    alert("All good! Submitting…");
    form.reset();
    window.location.href = '../html/payment.html'
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const eyeIcon = document.getElementById("eye");
  const passwordField = document.querySelector('.pass-in');
  const confirmField = document.querySelector('.cpass-in');


  eyeIcon.onclick = function () {
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  };


  eyeIcon.onclick = function () {
    confirmField.type = confirmField.type === 'password' ? 'text' : 'password';
  };
});



