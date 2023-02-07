const emailBar = document.querySelector("#email");
const passwordBar = document.querySelector("#pwd");
const loginBtn = document.querySelector("#loginBtn");



loginBtn.addEventListener('click', function(){
  console.log(emailBar.value);
  console.log(passwordBar.value);
 document.body.innerHTML = `<p>Logged in \u2713 </p>`;
})
