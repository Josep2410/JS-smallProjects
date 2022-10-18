const startStop = document.querySelector("#on-off");
const hourBtn = document.querySelector(".hours");
const minBtn = document.querySelector(".minutes");
const secBtn = document.querySelector(".seconds");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
let hrMode = false;
let minMode = false;
let secMode = false;
let hours = 0;
let minutes = 0; 
let seconds = 0;
let key = '000';

startStop.addEventListener("click", function(){
  if(startStop.textContent == 'START'){
    startStop.textContent = 'STOP';
    startStop.style.color = 'red';
  }
  else{
    startStop.textContent ='START';
    startStop.style.color = '#02d202';
  }
  
})

hourBtn.addEventListener("click", toggleHour);
minBtn.addEventListener("click", toggleMin);
secBtn.addEventListener("click", toggleSec);

function toggleHour(){
  if(hrMode == false){
    turnOn(hourBtn); //darker
    hrMode = true;

    turnOff(minBtn);
    turnOff(secBtn);

    minMode = false;
    secMode = false;
  }
  else{
    turnOff(hourBtn);
    hrMode = false;
  }
  
}


function toggleMin(){
  if(minMode == false){
    turnOn(minBtn); //darker
    minMode = true;
    turnOff(hourBtn);
    turnOff(secBtn);
    hrMode = false;
    secMode = false;
  }
  else{
    turnOff(minBtn);
    minMode = false;
    
  }
}

function toggleSec(){
  if(secMode == false){ 
    turnOn(secBtn); //darker
    secMode = true;
    turnOff(hourBtn);
    turnOff(minBtn);
    hrMode = false;
    minMode = false;
  }
  else{
    turnOff(secBtn);
    secMode = false;
    
  }
}



function turnOn(x){
  x.style.backgroundColor = '#a4a4a4'; //darker
}

function turnOff(x){
  x.style.backgroundColor = '#dfdede'; //lighter
}

function toggleMode(mode){
  if(mode==true){
    return mode=false;
  }
  else{
    return mode = true;
  }
}