const text = document.querySelector("#text");
const clearBtn = document.querySelector("#clear");
const equalBtn = document.querySelector(".equal");
const operations = document.querySelectorAll(".operation"); //operations is an 'array' of all items with class .operation
const numbers = document.querySelectorAll(".nums");

let displayText = '';
let ints  = [];
numbers.forEach(item=>{ //return the value of number pressed
  item.addEventListener("click", function(){
   displayText+=item.value;
   display();
  })
 
})

operations.forEach(item=>{ //returns the operator's value pressed
  item.addEventListener("click", function(){
  displayText+= " " + item.value + " " ;
  display();
  })
})

function display(){
  text.innerHTML = displayText;
}
function result(result){
  ints = [];
  displayText = '';
  text.innerHTML = result;
}

clearBtn.addEventListener("click", function(){
ints = [];
displayText = '';
text.innerHTML = displayText;
});

equalBtn.addEventListener("click", calculate);

function calculate(){
  displayText = displayText.split(" ");
  console.log(displayText);
  for(let i = 0; i < displayText.length; i++){
    if(displayText[i] == '-' || displayText[i] == '+' || displayText[i] == 'x' || displayText[i] == '/'){
    continue;
    }
    ints.push(Number(displayText[i])) ;
  }
  if(displayText[1] === '+')sum(0,ints);
  else if(displayText[1] === '-')subtract(ints);
  else if(displayText[1] === 'x')multiply(1, ints);
  else(divide(ints));
}



function sum(total, nums){
  nums.forEach(element=>{
    total+=element;
  });
  result(total);
}

function multiply(product, nums){
  nums.forEach(element=>{
    product*=element;
  });
  result(product);

}

function subtract(nums){
  let difference = 2* nums[0];
  nums.forEach(item =>{
    difference-=item;
  })
  result(difference);
}
function divide(nums){
let quotient = nums[0]*nums[0];
nums.forEach(item => {
  quotient/=item;
});
result(quotient);
}



