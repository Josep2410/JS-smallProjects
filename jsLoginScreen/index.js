const emailBar = document.querySelector("#email");
const passwordBar = document.querySelector("#pwd");
const loginBtn = document.querySelector("#loginBtn");

document.body.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    console.log(emailBar.value);
    console.log(passwordBar.value);
    
  }
})


loginBtn.addEventListener('click', function(){
 document.body.innerHTML = `<p>Logged in \u2713 </p>`;
})
