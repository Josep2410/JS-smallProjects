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
  img: "images/ok.PNG",
  title: "me"
}, 
{
  id: 3,
  img: "images/selfie.JPG",
  title: "selfie"
},
{
  id: 4,
  img: "images/tarsier.jpg",
  title: "tarsier"
}
]
const imagesContainer = document.querySelector("#imagesContainer");
let randomNum = Math.floor(Math.random()*5); //for the 5 items in my array
const leftBtn  = document.querySelector("#leftClick");
const rightBtn  = document.querySelector("#rightClick");
const leftSection = document.querySelector(".leftSection");
const rightSection = document.querySelector(".rightSection");


window.addEventListener("DOMContentLoaded", function(){
  mainImage(images, randomNum);
  if(screen.width > 700){
    sideImages(images, randomNum);
  }
});

window.addEventListener("resize", function(){
  if(screen.width > 700){
    leftSection.classList.add("leftSection");
    rightSection.classList.add("rightSection");
    
  }else{
    leftSection.classList.remove("leftSection");
    rightSection.classList.remove("rightSection");
  }
});



// randomly select one of the items in the array and display its image
function mainImage(db, number){ 
  imagesContainer.innerHTML = `<img
  class="mainImage"
  src=${db[number].img}
  alt=${db[number].title}
/>`
}


leftBtn.addEventListener("click", function(){
  randomNum--;
  if(randomNum < 0 ) randomNum = 4;
  mainImage(images, randomNum);
  sideImages(images, randomNum);
})

rightBtn.addEventListener("click", function(){
  randomNum++;
  if(randomNum > 4) randomNum = 0;
  mainImage(images, randomNum);
  sideImages(images, randomNum);
})


function sideImages(db, number){
  let left = number - 1;
  if(left < 0 ) left = 4;
  
  leftSection.innerHTML = `<img
  class="right_left"
  src=${db[left].img}
  alt=${db[left].title}
  />`

  let right = number + 1;
  if(right>4) right = 0;
  rightSection.innerHTML = `<img
  class="right_left"
  src=${db[right].img}
  alt=${db[right].title}
  />`
}



