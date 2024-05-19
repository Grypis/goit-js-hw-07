function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const inputNumbers = document.querySelector('#controls input');
const createBtn = document.querySelector('#controls button[data-create]');
const destroyBtn = document.querySelector('#controls button[data-destroy]');

function createBoxes(amount) {
  destroyBoxes();
  let setOfBoxes = '';
  for (let i = 0; i < amount; i++) {
    const boxSize = 30 + i * 10;
    setOfBoxes += `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
  }
  boxes.insertAdjacentHTML('beforeend', setOfBoxes);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
createBtn.addEventListener('click', () => {
  const amount = inputNumbers.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputNumbers.value = '';
  }
});
destroyBtn.addEventListener('click', destroyBoxes);
