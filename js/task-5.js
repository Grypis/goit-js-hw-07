function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const backgroundColorSpanValue = document.querySelector('.color');
const changeBodyColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  backgroundColorSpanValue.textContent = body.style.backgroundColor;
};
changeColorBtn.addEventListener('click', changeBodyColor);
