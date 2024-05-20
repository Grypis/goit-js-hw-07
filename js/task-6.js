function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');

const input = controls.children[0];
const createButton = controls.children[1];
const deleteButton = controls.children[2];

const boxes = document.querySelector('#boxes');

function createBoxes(amount) {
  let size = 30;
  boxes.innerHTML = '';
  const boxWithAllBoxes = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxWithAllBoxes.append(box);
    size += 10;
  }

  boxes.append(boxWithAllBoxes);
}

createButton.addEventListener('click', () => {
  const amount = input.value.trim();
  if (amount < 1 || amount > 100) {
    console.warn('Please give proper value');
  } else {
    createBoxes(amount);
    input.value = '';
  }
});

deleteButton.addEventListener('click', () => {
  boxes.innerHTML = '';
});
