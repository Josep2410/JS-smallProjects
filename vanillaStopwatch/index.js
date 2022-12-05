let text = document.querySelector(".text");
let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let numOfSecs = 0;

startBtn.addEventListener("click", function(){
  const timer = setInterval(function(){
    countUp();
  }, 1000);
  stopBtn.addEventListener("click", function(){
    clearInterval(timer);
    });
  resetBtn.addEventListener("click", function(){
    clearInterval(timer);
    text.innerHTML= "00:00";
    numOfSecs = 0;
    })

})


function countUp(){
  numOfSecs++;
  let minutes = padding(String(Math.floor(numOfSecs / 60))) ;
  let seconds = numOfSecs % 60;
  seconds = padding(String(seconds));
  text.innerHTML = `${minutes}:${seconds}`;
}

function padding(num){
  return num.length >1? num: `0${num}`;
}
