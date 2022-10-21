/* const startStop = document.querySelector("#on-off");
const hourBtn = document.querySelector(".hours");
const minBtn = document.querySelector(".minutes");
const secBtn = document.querySelector(".seconds");
const upBtn = document.querySelector("#up");
const downBtn = document.querySelector("#down");
const display = document.querySelector(".display");
class Timer{
   hrMode = false;
   minMode = false;
   secMode = false;
   hours = 0;
   minutes = 0; 
   seconds = 0;
}

let myTimer = new Timer();

startStop.addEventListener("click", ()=>{
  changeText(startStop);
})

hourBtn.addEventListener("click", ()=>{
  myTimer.hrMode = getStatus(myTimer.hrMode);
  console.log(myTimer.hrMode);

  upBtn.addEventListener("click", ()=>{
    if(myTimer.hour=true){
      myTimer.hours = increment(myTimer.hours);
      display.textContent = `${myTimer.hours}:${myTimer.minutes}:${myTimer.seconds}`;
    }});
   
  
  myTimer.hrMode = changeStatus(myTimer.hrMode, hourBtn);
  console.log(myTimer.hrMode);
});



function increment(value){
  ++value;
  value = pad(value);
  return value;
}

function decrement(){

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

function pad(unit){
  return (("0") + unit).length > 2 ? unit : "0" + unit;
} */