const startStop = document.querySelector("#on-off");
const hourBtn = document.querySelector(".hours");
const minBtn = document.querySelector(".minutes");
const secBtn = document.querySelector(".seconds");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
const display = document.querySelector(".display");
let hrs = 'hours';
let min = 'minutes';
let secs = 'seconds';
let counter = 0;

class Timer{
   hrMode = false;
   minMode = false;
   secMode = false;
   hours = 0;
   minutes = 0; 
   seconds = 0;
}

let myTimer = new Timer();

startStop.onclick = function(){
  
  if(myTimer.hrMode==true){
    myTimer.hrMode = changeStatus(myTimer.hrMode, hourBtn);
  }
  if(myTimer.minMode==true){
    myTimer.minMode = changeStatus(myTimer.minMode,minBtn);
  }
  if(myTimer.secMode==true){
    myTimer.secMode = changeStatus(myTimer.secMode,secBtn);
  }
 
 startStop.textContent === 'START' ? boom = setInterval(countdown,1000) : clearInterval(boom);
 changeText(startStop);
 function countdown(){
  myTimer.seconds=decrement(myTimer.seconds, secs);
  if(myTimer.seconds== 59){
    myTimer.minutes=decrement(myTimer.minutes, min);
    if(myTimer.minutes==59){
      myTimer.hours = decrement(myTimer.hours, hrs);
    }
  }
  display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
  if(display.textContent === '00:00:00'){
    clearInterval(boom);
    changeText(startStop);
    window.alert("Boom. You're dead");
  }
  
}
}
  


hourBtn.addEventListener("click", ()=>{
  if(myTimer.minMode==true){
    myTimer.minMode = changeStatus(myTimer.minMode,minBtn);
  }
  if(myTimer.secMode==true){
    myTimer.secMode = changeStatus(myTimer.secMode,secBtn);
  }

  myTimer.hrMode = changeStatus(myTimer.hrMode, hourBtn);
  myTimer.hrMode = getStatus(myTimer.hrMode);
  console.log(myTimer.hrMode);

  upBtn.onclick = function(){
    if(myTimer.hrMode ==true){
    myTimer.hours = increment(myTimer.hours, hrs);
    myTimer.minutes = pad(myTimer.minutes);
    myTimer.seconds = pad(myTimer.seconds);
    display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
  downBtn.onclick = function(){
    if(myTimer.hrMode ==true){
      myTimer.hours = decrement(myTimer.hours, hrs);
      myTimer.minutes = pad(myTimer.minutes);
      myTimer.seconds = pad(myTimer.seconds);
      display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
});

minBtn.addEventListener("click", ()=>{
  if(myTimer.hrMode==true){
    myTimer.hrMode = changeStatus(myTimer.hrMode,hourBtn);
  }
  if(myTimer.secMode==true){
    myTimer.secMode = changeStatus(myTimer.secMode,secBtn);
  }
  myTimer.minMode = changeStatus(myTimer.minMode, minBtn);
  myTimer.minMode = getStatus(myTimer.minMode);
  console.log(myTimer.minMode);
  upBtn.onclick = function(){
    if(myTimer.minMode ==true ){
    myTimer.minutes = increment(myTimer.minutes, min);
    myTimer.hours = pad(myTimer.hours);
    myTimer.seconds = pad(myTimer.seconds);
    display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
  downBtn.onclick = function(){
    if(myTimer.minMode ==true ){
      myTimer.minutes = decrement(myTimer.minutes, min);
      myTimer.hours = pad(myTimer.hours);
      myTimer.seconds = pad(myTimer.seconds);
      display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
});

secBtn.addEventListener("click", ()=>{
  if(myTimer.hrMode==true){
    myTimer.hrMode = changeStatus(myTimer.hrMode, hourBtn);
  }
  if(myTimer.minMode==true){
    myTimer.minMode = changeStatus(myTimer.minMode,minBtn);
  }
  myTimer.secMode = changeStatus(myTimer.secMode, secBtn);
  myTimer.secMode = getStatus(myTimer.secMode);
  console.log(myTimer.secMode);
  upBtn.onclick = function(){
    if(myTimer.secMode ==true){
    myTimer.seconds = increment(myTimer.seconds, secs);
    myTimer.hours = pad(myTimer.hours);
    myTimer.minutes = pad(myTimer.minutes);
    display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
  downBtn.onclick = function(){
    if(myTimer.secMode ==true ){

      myTimer.seconds = decrement(myTimer.seconds, secs);
      myTimer.hours = pad(myTimer.hours);
      myTimer.minutes = pad(myTimer.minutes);
      display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
});


function increment(value, btn){
  value++;
  if((btn === 'seconds' || btn === 'minutes') && value >59 ){
    value = 0;
  }
  if((btn === 'hours') && value >23 ){
    value = 0;
  }
  value = pad(value);
  return value;
}

function decrement(value,btn ){
  value--;
  if((btn === 'seconds' || btn === 'minutes') && value <0 ){
    value = 59;
  }
  if((btn === 'hours') && value <0 ){
    value = 23;
  }
  value = pad(value);
  return value;
}

function getStatus(mode){
  return mode;
}

function changeStatus(mode, btn){
  if(mode == true){
    btn.style.backgroundColor = '#dfdede'; //lighter
    return myTimer.mode = false;
  }
  else{
    btn.style.backgroundColor = '#a4a4a4'; //darker
   return myTimer.mode = true;
  }
}

function pad(unit){
  return (("0") + unit).length > 2 ? unit : "0" + unit;
}

function changeText(txt){
  if(txt.textContent == 'START'){
    startStop.textContent = 'STOP';
    startStop.style.color = 'red';
  }
  else{
    startStop.textContent ='START';
    startStop.style.color = '#02d202';
  }
}






