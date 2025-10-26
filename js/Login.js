const form2 = document.getElementById("login-form");
const email = document.getElementById("email");
const password = document.getElementById("password");


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


function validateEmail() {
  clearError(email);
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email.value.trim())) {
    showError(email, "Please enter a valid email.");
    return false;
  }
  return true;
}

function validatePassword() {
  clearError(password);
  if (password.value.length < 6) {
    showError(password, "Password must be at least 6 characters.");
    return false;
  }
  return true;
}
 

email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);

form2.addEventListener("submit", function (e) {
  e.preventDefault();
  const valid = validateEmail() && validatePassword();

  if (valid) {
    alert("Login successful!");
    form2.reset();
    window.location.href = '../html/payment.html';
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const eyeIcon = document.getElementById("eye");
  eyeIcon.onclick = function () {
    password.type = password.type === "password" ? "text" : "password";
  };
});