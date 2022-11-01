// Описаний в документації
import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
import '../css/common.css';

const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

let interval = null;

startBtn.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);

    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      // alert('Please choose a date in the future');
      startBtn.setAttribute('disabled', true);
    }
    startBtn.removeAttribute('disabled');
  },
};

const calendar = flatpickr('#datetime-picker', options);

// startBtn = addEventListener('click', timer.start().bind(timer));
startBtn.addEventListener('click', startTimeBtn);

function startTimeBtn() {
  const startTime = calendar.selectedDates[0];
  // console.log(startTime);

  interval = setInterval(() => {
    const deltaTime = startTime - Date.now();
    // console.log(deltaTime);
    if (deltaTime <= 0) {
      clearInterval(interval);
      return;
    }
    const time = convertMs(deltaTime);

    updDateTime(time);
  }, 1000);
}

// const timer = {
//   isActive: false,
//   start() {
//     if (this.isActive) {
//       return;
//     }

//     const startTime = calendar.selectedDates[0];
//     this.isActive = true;

//     setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = startTime - currentTime;
//       const time = convertMs(deltaTime);

//       updDateTime(time);
//     }, 1000);
//   },
// };

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function updDateTime({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}
