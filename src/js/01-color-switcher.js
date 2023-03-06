function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
let timerId = null;
refs.stop.setAttribute('disabled', true);
refs.start.addEventListener('click', onClickBtnStart);
refs.stop.addEventListener('click', onClickBtnStop);

function onClickBtnStart() {
  timerId = setInterval(changeBkgWithTimeOut, 1000);
  refs.start.setAttribute('disabled', true);
  refs.stop.removeAttribute('disabled');
}

function onClickBtnStop() {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', true);
}

function changeBkgWithTimeOut() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
