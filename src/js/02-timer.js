import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
  inputPicker: document.querySelector('#datetime-picker'),
  start: document.querySelector('[data-start]'),
};
refs.start.setAttribute('disabled', true);
const options = {
  isActive: false,
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 2,
  onClose(selectedDates) {
    options.isActive = false;
    const selectedDate = selectedDates[0];
    if (selectedDate < options.defaultDate) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    Notiflix.Notify.success('Press the start button to start the timer');
    refs.start.removeAttribute('disabled');
    function updateCounter() {
      if (options.isActive) {
        return;
      }
      options.isActive = true;
      const timerId = setInterval(() => {
        const timeLeft = selectedDate - new Date();
        if (timeLeft < 0) {
          return;
        }
        const { days, hours, minutes, seconds } = convertMs(timeLeft);
        fillsTheTimer({ days, hours, minutes, seconds });
      }, 1000);
    }
    refs.start.addEventListener('click', updateCounter);
  },
};

flatpickr(refs.inputPicker, options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function pad(value) {
  return String(value).padStart(2, '0');
}
function fillsTheTimer({ days, hours, minutes, seconds }) {
  refs.days.textContent = days < 10 ? "0" + days : days;
  refs.hours.textContent = hours;
  refs.minutes.textContent = minutes;
  refs.seconds.textContent = seconds;
}
