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


const values = [[20,420, 9], [120, 200, 12], [270, 80, 16], [450,250, 19], [550, 580, 25]];  //values: [top,left/right, width, height] width = height
window.addEventListener('DOMContentLoaded', function(){
  addImages(images, randomNum);
}); 
window.addEventListener('keydown', changeDirection);
function changeDirection(event){
  if(event.keyCode == 37 ){
    slideLeft();
  }else if(event.keyCode == 39){
    
  }
}

function slideLeft(){
  document.getElementById("fourthImage").style.top = 1 + 'px';
}
function addImages(db, number){
  document.body.innerHTML = `<img id="zerothImage" src="${db[((number-4)+9)%9].img}" alt="${db[((number-4)+9)%9].title}" />
  <img id="firstImage" src="${db[((number-3)+9)%9].img}" alt="${db[((number-3)+9)%9].title}" />
  <img id="secondImage" src="${db[((number-2)+9)%9].img}" alt="${db[((number-2)+9)%9].title}" />
  <img id="thirdImage" src="${db[((number-1)+9)%9].img}" alt="${db[((number-1)+9)%9].title}" />
  <img id="fourthImage" src="${db[number].img}" alt="${db[number].title}" />
  <img id="fifthImage" src="${db[(number+1)%9].img}" alt="${db[(number+1)%9].title}" />
  <img id="sixthImage" src="${db[(number+2)%9].img}" alt="${db[(number+2)%9].title}" />
  <img id="seventhImage" src="${db[(number+3)%9].img}" alt="${db[(number+3)%9].title}" />
  <img id="eigthImage" src="${db[(number+4)%9].img}" alt="${db[(number+4)%9].title}" />`

}





  