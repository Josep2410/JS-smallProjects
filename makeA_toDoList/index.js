//keep in mind innerHTML is susceptible to malicious XSS attacks
//can bypass by replacing 'innerHTML' with 'textContent'


document.getElementById("addItem").onclick = addItemToList;

const myList = document.querySelector("#to-do-list");

function addItemToList(){
  const newItem = document.createElement("li");
  newItem.textContent = document.querySelector("#inputBar").value;
  myList.prepend(newItem);
}