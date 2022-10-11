
const myList = document.querySelector("#to-do-list");
const submitBTN = document.querySelector("#submitBTN");
const submitList = document.querySelector("#submittedList");



let numOfEntries = 0;


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
    const newLabel = document.createElement("label");
    const lineFiller = document.createElement("p");
    newInput.type = 'checkbox';
    lineFiller.style.margin = 0 + 'px';
    
    newLabel.textContent = document.querySelector("#inputBar").value;
    
    myList.prepend(newLabel);
    myList.prepend(newInput);
    myList.prepend(lineFiller);
   
    submitBTN.addEventListener("click", submitItems);
    
  }
 
 
}

function clearList(){
 myList.innerHTML= "";
 numOfEntries = 0;
 submitList.innerHTML = "";
}

function submitItems(){
 
  if(confirm("Are you sure to submit items?") == true){
    
    const allLabels = document.querySelectorAll("label");

    allLabels.forEach((item)=>{
      const newItem = document.createElement("li");
      newItem.textContent = item.textContent;
      submitList.append(newItem);
    })

  }

}

//need to work on styling when pasting
