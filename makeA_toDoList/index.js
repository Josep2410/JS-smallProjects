//keep in mind innerHTML is susceptible to malicious XSS attacks
//can bypass by replacing 'innerHTML' with 'textContent'

const myList = document.querySelector("#to-do-list");
const submitBTN = document.querySelector("#submitBTN");
const submitList = document.querySelector("#submittedList")

let numOfEntries = 0;

document.getElementById("addItem").onclick = addItemToList;

document.body.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    addItemToList();
  }
});

function addItemToList(){
  numOfEntries++;
  
  if(numOfEntries>9){

  }
  else{
    const newInput = document.createElement("input");
    const newLabel = document.createElement("label");
    const lineFiller = document.createElement("p");
    newInput.type = 'checkbox';
    lineFiller.style.margin = 0 + 'px';
    
    newLabel.textContent = document.querySelector("#inputBar").value;
    
    myList.prepend(newLabel);
    myList.prepend(newInput);
    myList.prepend(lineFiller);
    
    const allLI = document.querySelectorAll("li");
    submitBTN.addEventListener("click" , submitItems);
    
  }
 
 
}

function clearList(){
 myList.innerHTML= "";
 numOfEntries = 0;
}

function submitItems(){
  if(confirm("Are you ready to submit items?") == true){
    window.alert("You said YES");
  
  }
  
  

}



