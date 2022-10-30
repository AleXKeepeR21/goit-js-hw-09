const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const bodyChangeColor = document.querySelector('body');

let interval = null;

stopBtn.setAttribute('disabled', true);

startBtn.addEventListener('click', clickStartBtn);
stopBtn.addEventListener('click', clickStopBtn);

function clickStartBtn() {
  stopBtn.removeAttribute('disabled');
  startBtn.setAttribute('disabled', true);
  interval = setInterval(() => {
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function clickStopBtn() {
  stopBtn.setAttribute('disabled', true);
  startBtn.removeAttribute('disabled');
  clearInterval(interval);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
