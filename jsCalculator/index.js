

function sum(total, ...nums){
  nums.forEach(element=>{
    total+=element;
  });
  return total;
}

function multiply(product, ...factors){
factors.forEach(factor => {
  product*=factor;
})
return product;
}

function subtract(minuend , ...subtrahends){
  subtrahends.forEach(item => {
    minuend-=item;
  })
  return minuend;
}
function divide(dividend, ...divisor){
  divisor.forEach(item => {
    dividend/=item;
  })
  return dividend;
}

console.log(divide(16,4));