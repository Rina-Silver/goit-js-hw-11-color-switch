const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
const SWITCH_INTERVAL = 1000;
let timerId = null;

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

refs.bodyRef.addEventListener('click', onBtnClick);
function onBtnClick(e) {
  if (e.target === refs.startBtn) {
    console.log('start');
    switchColor(colors);
    refs.startBtn.setAttribute('disabled', true);
    return;
  }
  if (e.target === refs.stopBtn) {
    console.log('stop');
    stopSwitchColor();
    refs.startBtn.removeAttribute('disabled');
    return;
  }
}

function switchColor(colors) {
  console.log('меняю цвет');

  timerId = setInterval(() => {
    refs.bodyRef.setAttribute(
      'style',
      `background-color:${
        colors[randomIntegerFromInterval(0, colors.length - 1)]
      }`
    );
  }, SWITCH_INTERVAL);
}

function stopSwitchColor() {
  clearInterval(timerId);
}
