//keep in mind innerHTML is susceptible to malicious XSS attacks
//can bypass by replacing 'innerHTML' with 'textContent'

const myList = document.querySelector("#to-do-list");


document.getElementById("addItem").onclick = addItemToList;

document.body.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    addItemToList();
  }
});

function addItemToList(){
  const newInput = document.createElement("input");
  const newLabel = document.createElement("label");
  const lineFiller = document.createElement("p");
  newInput.type = 'checkbox';
  lineFiller.style.margin = 0 + 'px';
  
  newLabel.textContent = document.querySelector("#inputBar").value;
  
  myList.prepend(newLabel);
  myList.prepend(newInput);
  myList.prepend(lineFiller);
 
}

function clearList(){
 myList.innerHTML= "";
}

function submitItems(){

}



