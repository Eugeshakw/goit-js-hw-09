
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
    intervalId: null,

    start() {
       
        this.intervalId =  setInterval(() => {
            const startTime = flatpickr.parseDate(refs.inputData.value, 'Y-m-d H:i:S')
            const currentTime = Date.now();
            const deltaTime = startTime - currentTime;
            const time = convertMs(deltaTime);

            spanUpdateDefault(time);

           

            if(deltaTime <= 0){
                clearInterval(this.intervalId);
                spanUpdateDefault(convertMs(0))
            }
            // console.log(`${days} : ${hours} : ${minutes} : ${seconds}`)
            // console.log({ days, hours, minutes, seconds });
        }, 1000);
    }
}

function spanUpdateDefault({days, hours, minutes, seconds}) {
    refs.spDays.textContent = `${days}`;
    refs.spHours.textContent = `${hours}`;
    refs.spMinutes.textContent = `${minutes}`;
    refs.spSec.textContent = `${seconds}`;

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
                refs.btn.disabled = true;
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



const promise = new Promise((resolve, reject)=> {
    const canFullfill = Math.random() > 0.5;

    setTimeout(() => {
        if(canFullfill){
            resolve('Успешно...')
        } else {
            reject ('не успешно')
        }

    }, 4000)
})



    

promise
.then(reult => {console.log(reult)})
.catch(error=> {console.log(error)})