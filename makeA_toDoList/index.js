//keep in mind innerHTML is susceptible to malicious XSS attacks
//can bypass by replacing 'innerHTML' with 'textContent'


document.getElementById("addItem").onclick = addItemToList;

//add item to list when 'Enter' key is pressed
document.body.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    addItemToList();
  }
});

const myList = document.querySelector("#to-do-list");

function addItemToList(){
  const newItem = document.createElement("li");
  newItem.textContent = document.querySelector("#inputBar").value;
  myList.prepend(newItem);
}


document.querySelector("#clearItems").onclick = removeItems;

function removeItems(){
  const element =  document.querySelector("li");
 element.remove();
}

