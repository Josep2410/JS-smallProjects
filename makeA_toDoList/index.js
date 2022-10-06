//keep in mind innerHTML is susceptible to malicious XSS attacks
//can bypass by replacing 'innerHTML' with 'textContent'


let planner = document.querySelector("#planner");

document.getElementById("addItem").onclick = addItemToList;

document.body.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    addItemToList();
  }
});

const myList = document.querySelector("#to-do-list");

function addItemToList(){
  const newInput = document.createElement("input");
  newInput.type = 'radio';
  const newLabel = document.createElement("label");
  newLabel.textContent = document.querySelector("#inputBar").value ;
  myList.prepend(newLabel);
  myList.prepend(newInput);
  
 
}




function clearList(){
 myList.innerHTML= "";
}



