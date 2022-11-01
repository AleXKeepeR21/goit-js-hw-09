function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// ---------------------------------------------

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
// import Notiflix from 'notiflix';
// // задаємо елементи та змінні
// let dateEnd = null;
// let timeLeft = null;

// const inputEl = document.querySelector('#datetime-picker');
// const timeDays = document.querySelector('.value[data-days]');
// const timeHours = document.querySelector('.value[data-hours]');
// const timeMinutes = document.querySelector('.value[data-minutes]');
// const timeSeconds = document.querySelector('.value[data-seconds]');
// const btnElem = document.querySelector('button');

// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }

// btnElem.setAttribute('disabled', true);

// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     if (selectedDates[0] < Date.now()) {
//       Notiflix.Notify.failure('Please choose a date in a future');
//       return;
//     }
//     btnElem.removeAttribute('disabled');
//     dateEnd = selectedDates[0];
//     console.log(Date.now(dateEnd));
//   },
// };

// flatpickr(inputEl, options);

// // час від якого потрібно вести відлік
// btnElem.addEventListener('click', SomeNew);

// function SomeNew() {
//   setInterval(() => {
//     timeLeft = dateEnd - Date.now();
//     // console.log(timeLeft);
//     const { seconds, minutes, hours, days } = convertMs(timeLeft);
//     timeSeconds.textContent = addLeadingZero(seconds);
//     timeMinutes.textContent = addLeadingZero(minutes);
//     timeHours.textContent = addLeadingZero(hours);
//     timeDays.textContent = addLeadingZero(days);
//   }, 1000);
// }
// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }
