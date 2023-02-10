//Referencing html elements
const signUpBtn = document.querySelector("#signUpBtn");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwdConfirm");
const feebackBox = document.querySelector("#feedback");
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

