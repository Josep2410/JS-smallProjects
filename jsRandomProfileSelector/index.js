const items = [
  {id: 0, name: 'Joseph Moreno', company: 'YTMZ', 
  img: 'images/me.PNG' , description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor . '}, 
  {id: 1, name: 'Stefanie Cohen', company: 'WWLA', description: 'consectetur adipiscing elit, sed do eiusmod tempor . ',
  img:'images/stefanie-cohen-dpt.jpg'}, 
  {id: 2, name: 'Mike Wazowski', company: 'Monster Inc',
  img:'images/MikeWazowsk.png' , description: 'sed do eiusmod tempor . '}, 
  {id: 3, name: 'Chupacabra', company: 'Mexico Border', 
  img:'images/chupacabra.png', description: ' amet, consectetur adipiscing elit, sed do eiusmod tempor . '}, 
  {id: 4, name: 'Curious George', company: 'YTMZ', 
  img: "images/curiousGeorge.jpg" ,description: 'Lorem ipsum dolor sit amet. '}, 

]

const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const card = document.querySelector(".card");

const myImg = document.querySelector('.myImg')
const id = document.querySelector("#name");
const company = document.querySelector("#company");
const descriptor = document.querySelector(".descriptor");
let randNum = Math.floor(Math.random()*5);

displayCard(randNum, items)

function displayCard(num, arr){
  console.log(num)
  myImg.src = arr[num].img
  id.textContent = arr[num].name;
 descriptor.textContent = arr[num].description;
 company.textContent = arr[num].company;
}

leftBtn.addEventListener("click", function(){
  randNum--;
  if(randNum< 0 ){
    randNum = items.length - 1;
  }
  displayCard(randNum, items)
})

rightBtn.addEventListener("click", function(){
  randNum++;
  if(randNum> items.length - 1 ){
    randNum = 0;
  }
  displayCard(randNum, items)
})

