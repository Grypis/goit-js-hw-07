'use strict';
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', submitForm);
function submitForm(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  const loginDataObj = {};
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  loginDataObj.email = email.trim();
  loginDataObj.password = password.trim();
  form.reset();
  console.log(loginDataObj);
}
