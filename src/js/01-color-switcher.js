function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
};
refs.start.addEventListener('click', onClickBtnStart);
refs.stop.addEventListener('click', onClickBtnStop);

function onClickBtnStart(e) {
  timerId = setInterval(changeBkgWithTimeOut, 1000);
  refs.start.setAttribute('disabled', true);
}

function onClickBtnStop(e) {
  clearInterval(timerId);
  refs.start.removeAttribute('disabled');
}

function changeBkgWithTimeOut() {
  refs.body.style.backgroundColor = getRandomHexColor();
}
