let array = new Array(10);
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
    title: "madara"
  },  
  {
    id: 6 , 
    img: "images/gojo.PNG", 
    title: "Gojo"
  },
  {
    id: 7 , 
    img: "images/tobirama.webp", 
    title: "tobirama"
  },
  {
    id: 8,
    img: "images/haikyu.jpg",
    title: "haikyu"
  }
  
  ]

let randomNum = Math.floor(Math.random()*9); //for the 9 items in Images[]

window.addEventListener('DOMContentLoaded', function(){
  mainImage(images, randomNum);
});
function mainImage(db, number){
  const mainImg = document.createElement("img");
  mainImg.setAttribute("id", "fourthImage");
  mainImg.src = db[number].img;
  document.body.appendChild(mainImg);
}


  