let numOfEntries = 0;
document.getElementById("addItem").onclick = addItemToList;

function addItemToList(){
  numOfEntries++;
  
  if (numOfEntries ===1){
    document.getElementById("to-do-list").innerHTML = "- "+document.getElementById("inputBar").value;
  }
  else if(numOfEntries>1){
    document.getElementById("to-do-list").innerHTML = document.getElementById("to-do-list").innerHTML + "<br>" + "- " +document.getElementById("inputBar").value ;
  }
}