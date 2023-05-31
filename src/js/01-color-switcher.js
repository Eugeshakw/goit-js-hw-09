function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }

const refs = {
btnStart: document.querySelector('[data-start]'),
btnStop: document.querySelector('[data-stop]'),

};
  
let colorRandomTimer = null;

refs.btnStart.addEventListener('click', onStartBtnClick)

function onStartBtnClick(evt){

    evt.preventDefault();
    colorRandomTimer = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    document.body.style.backgroundColor = getRandomHexColor();
    refs.btnStart.disabled = true; 
    refs.btnStop.disabled = false;

}



refs.btnStop.addEventListener('click', onStopBtnClick);

function onStopBtnClick(evt) {
    evt.preventDefault();
    clearInterval(colorRandomTimer);
    refs.btnStop.disabled = true;
    refs.btnStart.disabled = false;
}

  
