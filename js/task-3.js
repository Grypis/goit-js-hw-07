'use strict';
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
nameInput.addEventListener('input', event => {
  const currentInputValue = event.currentTarget.value.trim();
  if (currentInputValue === '') {
    return (nameOutput.textContent = 'Anonymous');
  }
  return (nameOutput.textContent = currentInputValue);
});
