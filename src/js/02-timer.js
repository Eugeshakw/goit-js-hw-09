
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix';

const refs = {
    inputData: document.querySelector('#datetime-picker'),
    btn: document.querySelector('button[data-start]'),
    spDays: document.querySelector('[data-days]'),
    spHours: document.querySelector('[data-hours]'),
    spMinutes: document.querySelector('[data-minutes]'),
    spSec: document.querySelector('[data-seconds]'),
}


// console.log(refs.spDays.textContent);
// console.log(refs.spHours.textContent);
// console.log(refs.spMinutes.textContent);
// console.log(refs.spSec.textContent);


refs.btn.disabled = true;





refs.btn.addEventListener('click', () =>{
    timer.start();
    
});






const timer = {
    start(startTime) {
       
        const currentInterval = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime)
            

            refs.spDays.textContent = days;
            refs.spHours.textContent = hours;
            refs.spMinutes.textContent = minutes;
            refs.spSec.textContent = seconds;

            if(deltaTime <= 0){
                clearInterval(currentInterval)
            }
            // console.log(`${days} : ${hours} : ${minutes} : ${seconds}`)
            // console.log({ days, hours, minutes, seconds });
        }, 1000);
    }
}



flatpickr('#datetime-picker', {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // minDate: 'today',
    onClose(selectedDates) {
        // console.log(selectedDates[0]);
        const dateSel = selectedDates[0];
        const date = new Date()
        
       
        if(dateSel < date){
            Notiflix.Notify.failure('Please choose a date in the future');
            return;
        };
        
        if(dateSel > date){
            refs.btn.addEventListener('click', () => {
                timer.start(dateSel);
            })
            refs.btn.disabled = false;
             
        };

      
    }
});

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

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
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); 
//   console.log(convertMs(140000)); 
//   console.log(convertMs(24140000));