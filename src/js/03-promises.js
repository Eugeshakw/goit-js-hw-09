

const refs = {
  form: document.querySelector('.form'),
  btn: document.querySelector('button'),
  
}

const delay = refs.form.elements.delay;
const step = refs.form.elements.step;
const amount = refs.form.elements.amount;
amount.addEventListener('submit', createPromise)
step.addEventListener('submit', createPromise)
delay.addEventListener('click', createPromise)




function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve = po
    })
  })
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

