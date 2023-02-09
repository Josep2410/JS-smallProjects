const signUpBtn = document.querySelector("#signUpBtn");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwdConfirm");


signUpBtn.addEventListener("click", validateInput);

//Check User's inputs
function validateInput(){
  let credentials = true;
  if(!fullName.value.includes(" ")) {
    invalidInput("name");
  }
  if(!email.value.includes("@")){
    invalidInput("email")
  }
  if((pwd.value !== pwdConfirm.value) || pwd.value ===""){
    invalidInput("password")
  } 
  
  if(credentials) createCredentials() //If no incorrect input
}

function invalidInput(string){
  credentials = false;
  console.log(`Invalid ${string}`)
}

function createCredentials(){
  console.log(`Credentials created: \n Full Name: ${fullName.value} \n Email: ${email.value} \n Password: ${pwd.value}`);
  document.body.innerHTML =
  `<p style = "font-size: 20px">Account Created \u2713</p> <a href="index.html"> 
    <p id="logIn" style = "color: orange ; margin-top:40px; margin-left:-10px">Log in</p></a>`;
}

