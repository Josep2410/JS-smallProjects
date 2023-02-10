//Referencing html elements
const signUpBtn = document.querySelector("#signUpBtn");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwdConfirm");
const mainElement = document.querySelector("#mainElement");
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
  searchMember(string){
    for(let account of this.array){
      if(account.name === string) return true;
    }
    return false;
  }
  
  getNumberOfMembers(){
    return this.array.length;
  }
}
let db = new Database();

signUpBtn.addEventListener("click", validateInput);

//Check User's inputs
function validateInput(){
  if(fullName.value.includes(" ") && email.value.includes("@") && (pwd.value === pwdConfirm.value)){
    let newAccount =  new Account(fullName.value, email.value, pwd.value);
   
    db.newMember(newAccount);
   // db.displayMembers();
    console.log(`Number of members: ${db.getNumberOfMembers()}`)
    if(newAccount)accountCreated(newAccount.name, newAccount.email, newAccount.password);
  } 
  else{
    if(!fullName.value.includes(" ")) {
      invalidInput("name");
    }
    if(!email.value.includes("@")){
      invalidInput("email")
    }
    if((pwd.value !== pwdConfirm.value) || pwd.value ===""){
      invalidInput("password")
    } 
  }
}

function invalidInput(string){
  let invalidOpt = document.createElement("p");
  invalidOpt.setAttribute('id', 'invalids');
  invalidOpt.textContent = `\u2717 Invalid ${string}`
  invalidOpt.style.color= 'red';
  mainElement.append(invalidOpt);
  console.log(`Invalid ${string}`)
  console.log(invalidOpt.getAttribute("id"))
}

//create an Account object when all input has been verified
function Account(fullName, email, password, id){
  this.name = fullName;
  this.email = email;
  this.password = password;
 
}


//Change document.body to show the account was created
function accountCreated(name, email, pwd){
  console.log(`Credentials created: \n Full Name: ${name} \n Email: ${email} \n Password: ${pwd}`);
  document.body.innerHTML =
  `<p style = "font-size: 20px">Account Created \u2713</p> <a href="index.html"> 
    <p id="logIn" style = "color: orange ; margin-top:40px; margin-left:-10px">Log in</p></a>`;
}

