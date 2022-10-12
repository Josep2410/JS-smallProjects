
const myList = document.querySelector("#to-do-list");
const submitBTN = document.querySelector("#submitBTN");
const submitList = document.querySelector("#submittedList");
const dateLine = document.querySelector("#dateContainer");
const date = new Date();


let NoTimeDate =  date.getDate()+'-'+(date.getMonth()+1)+'-'+ date.getFullYear();
let numOfEntries = 0;

dateLine.innerHTML = NoTimeDate + ' :';
dateLine.style.textDecoration = "underline";

document.getElementById("addItem").onclick = addItemToList;

document.body.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    addItemToList();
  }
});

function addItemToList(){
  numOfEntries++;
 
  if(numOfEntries>9 ){

  }
  else{
   
    const newInput = document.createElement("input");
    newInput.type = 'checkbox';
    newInput.setAttribute("id", "sameID");
    newInput.setAttribute("name", numOfEntries); 
    

    const newLabel = document.createElement("label");
    newLabel.setAttribute("for", numOfEntries);
    const lineFiller = document.createElement("p");
   
    lineFiller.style.margin = 0 + 'px';
    
    newLabel.textContent = document.querySelector("#inputBar").value;
    
    myList.prepend(newLabel);
    myList.prepend(newInput);
    myList.prepend(lineFiller);
    clearInputBar();  
   
   
    submitBTN.addEventListener("click", submitItems);
    
  }
 
 
}

function clearInputBar(){
  document.querySelector("#inputBar").value = "";
}

function clearList(){
 myList.innerHTML= "";
 numOfEntries = 0;
 submitList.innerHTML = "";
 clearInputBar();
}

function submitItems(){
 
 

}


