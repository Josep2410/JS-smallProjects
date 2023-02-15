
//Referencing html elements
const signUpBtn = document.querySelector("#signUpBtn");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwdConfirm");
const feebackBox = document.querySelector("#feedback");
const signIn = document.querySelector("#signIn")



 class Database{
  constructor(){
    this.array = [];
  }
  newMember(account){
    this.array.push(account);
  }
  getMembers(){
    for(let account of this.array){
      console.log(account);
    }
  }
  existingMember(email, password){
    for(let account of this.array){
      if(account.email === email && account.password === password) return true;
    }
    return false;
  }
  
  getNumberOfMembers(){
    return this.array.length;
  }

}
let db = new Database();

signUpBtn.addEventListener("click", validateInput);
signIn.addEventListener("click", function(){
  document.body.innerHTML = `<main id="loginScreen">
  <h1 id="loginText">Login</h1>
  <h5>Please sign in to continue.</h5>
  <section class="email-bar"><img id="emailImg" src="images/emailIcon.png" alt="" /><input id="email" type="input" placeholder="EMAIL"></section>
  <section class="password-bar"><img id="passwordIcon"src="images/passwordIcon.png" alt=""><input id="pwd"type="password" placeholder="PASSWORD"></section>
  <button id="loginBtn"><span id="text">LOGIN </span><span id="arrow">&#8594</span></button>
  <h6>Don't have an account? <a href="createAccount.html"> <span id="signUp">Sign up</span></h6></a>
  </main> `
  const logIn = document.querySelector("#loginBtn");
  
  const emailBar = document.querySelector("#email");
  const passwordBar = document.querySelector("#pwd");
  logIn.addEventListener("click", function(){
    console.log(emailBar.value, passwordBar.value);
   if(db.existingMember(emailBar.value, passwordBar.value)) console.log("Login Success")
   else(console.log("Failed login"))  ;
})
})

//Check User's inputs
function validateInput(){
  if(fullName.value.includes(" ") && email.value.includes("@") && (pwd.value === pwdConfirm.value)){
    let newAccount =  new Account(fullName.value, email.value, pwd.value);
   
    db.newMember(newAccount);
    console.log(`Number of members: ${db.getNumberOfMembers()}`)
    if(newAccount)accountCreated(newAccount.name, newAccount.email, newAccount.password);
  } 
  else{
    feebackBox.innerHTML = "";
    if(!fullName.value.includes(" ") || !fullName.value ) {
      invalidInput("name");
    }
    if(!email.value.includes("@") || !email.value){
      invalidInput("email")
    }
    if((pwd.value !== pwdConfirm.value) || pwd.value ==="" ){
      invalidInput("password")
    } 
  }
}

function invalidInput(string){
 
  let invalidOpt = document.createElement("p");
  invalidOpt.setAttribute('id', 'invalids');
  invalidOpt.textContent = `\u2717 Invalid ${string}`
  invalidOpt.style.color= 'red';
  feebackBox.append(invalidOpt);
}

//create an Account object when all input has been verified
function Account(fullName, email, password){
  this.name = fullName;
  this.email = email;
  this.password = password;
}


//Change document.body to show the account was created
function accountCreated(name, email, pwd){
  console.log(`Credentials created: \n Full Name: ${name} \n Email: ${email} \n Password: ${pwd}`);
  feebackBox.innerHTML =
  `<p style = "font-size: 18px; color: green; text-align: center; padding-top: 50px">Account Created \u2713</p> `;
}




