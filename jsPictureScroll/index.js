const images = [ 
{
  id: 0,
  img: "images/Aot_enviep.jpg", //images local to my computer
  title: "attack on titan"
}, 
{
  id: 1,
  img: "images/gojojujutsu.webp",
  title: "Gojo"
}, 
{
  id: 2,
  img: "images/naruto.jpg",
  title: "naruto"
}, 
{
  id: 3,
  img: "images/opm.webp",
  title: "One Punch Man"
},
{
  id: 4,
  img: "images/tarsier.jpg",
  title: "tarsier"
},
{
  id: 5,
  img: "images/madara.jpg",
  title: "tarsier"
}, 
{
  id: 6,
  img: "images/masterRoshi.jpg",
  title: "masterRoshi"
}

]
const imagesContainer = document.querySelector("#imagesContainer");
const leftBtn  = document.querySelector("#leftClick");
const rightBtn  = document.querySelector("#rightClick");
const leftSection = document.querySelector(".leftSection");
const rightSection = document.querySelector(".rightSection");
let randomNum = Math.floor(Math.random()*7); //for the 6 items in my array


window.addEventListener("DOMContentLoaded", function(){
  mainImage(images, randomNum);
  sideImages(images, randomNum);
});

window.addEventListener("keydown", keyPressed);

// randomly select one of the items in the array and display its image
function mainImage(db, number){ 
  imagesContainer.innerHTML = `<img
  class="mainImage"
  src=${db[number].img}
  alt=${db[number].title}
/>`
}

leftBtn.addEventListener("click", leftBtnPressed);
rightBtn.addEventListener("click", rightBtnPressed);

function leftBtnPressed(){
  randomNum--;
  if(randomNum < 0 ) randomNum = 6;
  mainImage(images, randomNum);
  sideImages(images, randomNum);
}

function rightBtnPressed(){
  randomNum++;
  if(randomNum > 6) randomNum = 0;
  mainImage(images, randomNum);
  sideImages(images, randomNum);
}

function keyPressed(event){
const keyPressed = event.keyCode;
 if(keyPressed == 37){
  leftBtnPressed();
 }else if(keyPressed == 39)rightBtnPressed();
}

function sideImages(db, number){
  let left = number - 1;
  if(left < 0 ) left = 6;
  
  leftSection.innerHTML = `<img
  class="right_left"
  src=${db[left].img}
  alt=${db[left].title}
  />`

  let right = number + 1;
  if(right>6) right = 0;
  rightSection.innerHTML = `<img
  class="right_left"
  src=${db[right].img}
  alt=${db[right].title}
  />`
}



