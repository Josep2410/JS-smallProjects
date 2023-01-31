const btn = document.querySelector(".btn");

btn.addEventListener("click", changeBackgroundColor)

console.log();

function changeBackgroundColor(){
let red = Math.floor(Math.random() * 256);
let green = Math.floor(Math.random() * 256);
let blue = Math.floor(Math.random() * 256);
  console.log("Hello")
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}