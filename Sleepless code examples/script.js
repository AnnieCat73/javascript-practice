const form = document.querySelector('#form');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateLength(password, 6, 25);
  validatePasswordsMatch(password, password2);
})

//Check passwords match
function validatePasswordsMatch(password, password2) {
  if (password.value !== password2.value) {
    displayError(password2, 'Passwords do not match');
  }
}

//Show inpute error message
function displayError(input, message) {
  const small = form.querySelector('small');
  small.innerText = message;
}

//check length
function validateLength(input, min, max) {

}