import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  
}

// console.log(refs.form,refs.delay,refs.step,refs.amount);





function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
    const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          resolve({position, delay});
          
        } else {
          reject({position, delay});
          
        }
    }, delay)
  })
   
}


refs.form.addEventListener('submit', submitForm);


function submitForm(e) {
  e.preventDefault();


  let delay = Number(refs.delay.value);
  const step = Number(refs.step.value);
  const amount = Number(refs.amount.value);

  for (let i = 0; i < amount; i += 1) {
      let position = i

      createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
      delay += step
  }
  
}



