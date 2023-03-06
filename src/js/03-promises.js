import Notiflix from 'notiflix';

const formEl = document.querySelector('form');

let formData = {};

formEl.addEventListener('input', onInputValue);
formEl.addEventListener('submit', onFormSubmit);

let position = 0;
function onFormSubmit(e) {
  e.preventDefault();
  for (let i = 0; i < formData.amount; i += 1) {
    if (i === 0) {
      formData.delay = Number(formData.delay) + Number(formData.step) * i;
    } else {
      formData.delay = Number(formData.delay) + Number(formData.step);
    }
    createPromise(formData)
      .then(({ position, delay }) => {
        setTimeout(
          () =>
            Notiflix.Notify.success(
              `Fulfilled promise ${position} in ${delay}ms`,
              {
                closeButton: true,
              }
            ),
          delay
        );
      })
      .catch(({ delay, position }) => {
        setTimeout(
          () =>
            Notiflix.Notify.failure(
              `Fulfilled promise ${position} in ${delay}ms`,
              {
                closeButton: true,
              }
            ),
          delay
        );
      });
  }
}
function createPromise({ delay, step, amount }) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    position += 1;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
  });
}
function onInputValue(e) {
  formData[e.target.name] = e.target.value;
}
