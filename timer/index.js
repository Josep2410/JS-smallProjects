const startStop = document.querySelector("#on-off");

let hours = 0;
let minutes = 0; 
let seconds = 0;

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