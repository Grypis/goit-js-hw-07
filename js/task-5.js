function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');
const background = document.body;

changeColorButton.addEventListener('click', () => {
  background.style.backgroundColor = getRandomHexColor();
  backgroundColorSpan.textContent = background.style.backgroundColor;
});
