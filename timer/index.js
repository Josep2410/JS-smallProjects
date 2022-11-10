const startStop = document.querySelector("#on-off");
const hourBtn = document.querySelector(".hours");
const minBtn = document.querySelector(".minutes");
const secBtn = document.querySelector(".seconds");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
const display = document.querySelector(".display");
const clearBtn = document.querySelector("#clear");
const audio = new Audio("audio/beep.mp3");
const explosion = new Audio("audio/hq-explosion.mp3");

const keypadBtn = document.querySelector("#toggle_keypad");
const popUp = document.querySelectorAll(".popUp");

const allkeypadBtns = document.querySelectorAll(".keypad-btn");


let hrs = 'hours';
let min = 'minutes';
let secs = 'seconds';
/* class Timer{
   hrMode = false;
   minMode = false;
   secMode = false;
   hours = 0;
   minutes = 0; 
   seconds = 0;
}
//Using Timer class
let myTimer = new Timer(); */

//Creating an object same as class 'Timer'
let myTimer = {
  hrMode : false,
  minMode : false,
  secMode : false,
  hours : 0,
  minutes : 0, 
  seconds : 0,
}

//Toggle keypad display
keypadBtn.addEventListener("click", function(){
  audio.play();
  popUp.forEach(element =>{
    element.classList.toggle("show");
  })
})

//when pressing Start/Stop btn, turn off Hrs, Min, & Sec ; 
//& change text
startStop.onclick = function(){
  audio.play();
  if(myTimer.hrMode){
    myTimer.hrMode = changeStatus(myTimer.hrMode, hourBtn);
  }
  if(myTimer.minMode){
    myTimer.minMode = changeStatus(myTimer.minMode,minBtn);
  }
  if(myTimer.secMode){
    myTimer.secMode = changeStatus(myTimer.secMode,secBtn);
  }
 
 startStop.textContent === 'START' ? boom = setInterval(countdown,1000) : clearInterval(boom);
 changeText(startStop);
 function countdown(){
  myTimer.seconds=decrement(myTimer.seconds, secs);
  if(myTimer.seconds == 59){
    myTimer.minutes=decrement(myTimer.minutes, min);
    if(myTimer.minutes==59){
      myTimer.hours = decrement(myTimer.hours, hrs);
    }
  }
  display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
  if(display.textContent === '00:00:00'){
    explosion.play();
    clearInterval(boom);
    changeText(startStop);
    
    setTimeout(()=>window.alert("Boom. You're dead.", 2000));
  }
  
}
}
  


hourBtn.addEventListener("click", ()=>{
  audio.play();
  if(myTimer.minMode){
    myTimer.minMode = changeStatus(myTimer.minMode,minBtn);
  }
  if(myTimer.secMode){
    myTimer.secMode = changeStatus(myTimer.secMode,secBtn);
  }

  myTimer.hrMode = changeStatus(myTimer.hrMode, hourBtn);
  myTimer.hrMode = getStatus(myTimer.hrMode);
  console.log(myTimer.hrMode);
  
  if(myTimer.hrMode){
    useKeypad(myTimer.hours, hrs);
  }

  upBtn.onclick = function(){
    audio.play();
    if(myTimer.hrMode ){
      
    myTimer.hours = increment(myTimer.hours, hrs);
    myTimer.minutes = pad(myTimer.minutes);
    myTimer.seconds = pad(myTimer.seconds);
    display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
  downBtn.onclick = function(){
    audio.play();
    if(myTimer.hrMode ){
      myTimer.hours = decrement(myTimer.hours, hrs);
      myTimer.minutes = pad(myTimer.minutes);
      myTimer.seconds = pad(myTimer.seconds);
      display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
});

minBtn.addEventListener("click", ()=>{
  audio.play();
  if(myTimer.hrMode==true){
    myTimer.hrMode = changeStatus(myTimer.hrMode,hourBtn);
  }
  if(myTimer.secMode==true){
    myTimer.secMode = changeStatus(myTimer.secMode,secBtn);
  }
  myTimer.minMode = changeStatus(myTimer.minMode, minBtn);
  myTimer.minMode = getStatus(myTimer.minMode);
  console.log(myTimer.minMode);

  if(myTimer.minMode){
    useKeypad(myTimer.minutes, min);
  }

  upBtn.onclick = function(){
    audio.play();
    if(myTimer.minMode ==true ){
    myTimer.minutes = increment(myTimer.minutes, min);
    myTimer.hours = pad(myTimer.hours);
    myTimer.seconds = pad(myTimer.seconds);
    display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
  downBtn.onclick = function(){
    audio.play();
    if(myTimer.minMode ==true ){
      myTimer.minutes = decrement(myTimer.minutes, min);
      myTimer.hours = pad(myTimer.hours);
      myTimer.seconds = pad(myTimer.seconds);
      display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
});

secBtn.addEventListener("click", ()=>{
  audio.play();
  if(myTimer.hrMode){
    myTimer.hrMode = changeStatus(myTimer.hrMode, hourBtn);
  }
  if(myTimer.minMode){
    myTimer.minMode = changeStatus(myTimer.minMode,minBtn);
  }
  myTimer.secMode = changeStatus(myTimer.secMode, secBtn);
  myTimer.secMode = getStatus(myTimer.secMode);
  console.log(myTimer.secMode);
  if(myTimer.secMode){
    useKeypad(myTimer.seconds, secs);
  }
  

  upBtn.onclick = function(){
    audio.play();
    if(myTimer.secMode){
    myTimer.seconds = increment(myTimer.seconds, secs);
    myTimer.hours = pad(myTimer.hours);
    myTimer.minutes = pad(myTimer.minutes);
    display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
  downBtn.onclick = function(){
    audio.play();
    if(myTimer.secMode ){
      myTimer.seconds = decrement(myTimer.seconds, secs);
      myTimer.hours = pad(myTimer.hours);
      myTimer.minutes = pad(myTimer.minutes);
      display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }
  }
});

clearBtn.addEventListener("click", ()=>{
  audio.play();
  myTimer.hours = 0;
  myTimer.minutes = 0;
  myTimer.seconds = 0;
 
  display.textContent = `00:00:00`;
})


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
  if(mode ){
    btn.style.backgroundColor = '#dfdede'; //lighter
    return !myTimer.mode ;
  }
  else{
    btn.style.backgroundColor = '#a4a4a4'; //darker
   return !myTimer.mode;
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


function useKeypad(newValue, btnType){
  let x ;
  let y ;
  switch(btnType){ //can prob use a double ternary operator for less lines...
    case "hours":
      x = 0;
      y = 1;
      break;
    case "minutes": 
      x = 3;
      y = 4;
      break;
    case "seconds":
      x = 6; 
      y = 7;
      break;
  }

  console.log(x, y);
  allkeypadBtns.forEach(item =>{
    item.addEventListener("click", function(){
    newValue = item.value;
    display.textContent.substring(x,y) = newValue;
    })
  })

  function rotateHrs(){
   return display.textContent.substring(6,7).length>1? display.textContent.substring(6,7): display.textContent;
  }

}



