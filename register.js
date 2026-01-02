let username = document.getElementById('username');
let ok = document.getElementById("ok");
let popupContainer = document.getElementById('popup-container')
let email = document.getElementById('email');
let form = document.querySelector('form');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let cpass = document.getElementById('cpass');
let check = document.getElementById('check');
let userBox = document.getElementById('user-box');
let emailBox = document.getElementById('email-box');
let phoneBox = document.getElementById('phone-box');
let passBox = document.getElementById('pass-box');
let cpassBox = document.getElementById('cpass-box');
let checkBox = document.getElementById('check-box');
let userErr = document.getElementById('user-err');
let emailErr = document.getElementById('email-err');
let phoneErr = document.getElementById('phone-err');
let passErr = document.getElementById('pass-err');
let cpassErr = document.getElementById('cpass-err');
let checkErr = document.getElementById('check-err');
let submitbtn = document.getElementById('submit');
let toggleEye = document.querySelectorAll('.toggle-pass');

let userTouched = false;
let emailTouched = false;
let phoneTouched = false;
let passTouched = false;
let cpassTouched = false;
let checkTouched = false;



function showErr(typeBox, typeErr, msg) {
  const icon = typeBox.querySelector("i");

  typeBox.classList.remove("success");
  typeBox.classList.add("failure");

  typeErr.classList.add("failure");
  typeErr.querySelector(".err").innerText = msg;

  if (icon) {
    icon.className = "fas fa-exclamation-circle";
    icon.style.visibility = "visible";
  }
}

function showSucc(typeBox) {
  const icon = typeBox.querySelector("i");
  const errorBox = typeBox.parentElement.nextElementSibling;

  typeBox.classList.remove("failure");
  typeBox.classList.add("success");

  if (errorBox) {
    errorBox.classList.remove("failure");
  }

  if (icon) {
    icon.className = "fas fa-check-circle";
    icon.style.visibility = "visible";
  }
}
function validateUserName() {
  if (!userTouched) return false;

  const userValue = username.value.trim();

  if (userValue === "") {
    showErr(userBox, userErr, "Username cannot be blank");
    return false;
  }

  if (!/^[A-Za-z ]{3,}$/.test(userValue)) {
    showErr(userBox, userErr, "Username must contain atleast 3 letters.");
    return false;
  }

  showSucc(userBox);
  return true;
}


function validateEmail(){
  const emailValue = email.value.trim();
   if(!emailTouched){
     return false;
   }
   if(emailValue === ""){
     showErr(emailBox,emailErr,"Email id cannot be blank");
     return false;
   }
   if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)){
     showErr(emailBox,emailErr,"Invalid email id format use example : username@example.com etc.");
     return false;
   }
   
   showSucc(emailBox);
   return true;

}

function validatePhone(){
  const phoneValue = phone.value.trim();
   if(!phoneTouched){
     return true;
   }
   if(phoneValue === ""){
    showSucc(phoneBox);
    return true;
   }
   if(!/^(?:\+91|91)?[-\s]?[6-9]\d{9}$/.test(phoneValue)){
     showErr(phoneBox,phoneErr,"Invalid Phone number");
     return false;
   }
   showSucc(phoneBox);
   return true;

}

function validatePass(){
  const passValue = password.value.trim();
   if(!passTouched){
     return false;
   }
   if(passValue === ""){
     showErr(passBox,passErr,"Password cannot be blank");
     return false;
   }
   if(!/^.{6,}$/.test(passValue)){
     showErr(passBox,passErr,"Password must contain atleast 6 characters");
     return false;
   }
   
   showSucc(passBox);
   return true;

}

function validateCPass(){
  const cpassValue = cpass.value.trim();
  const passValue = password.value.trim();
   if(!cpassTouched){
     return false;
   }
   if(cpassValue === ""){
     showErr(cpassBox,cpassErr," Confirm Password cannot be blank");
     return false;
   }
   if(!(cpassValue === passValue)){
     showErr(cpassBox,cpassErr,"Confirm Password is not matching");
     return false;
   }
   
   showSucc(cpassBox);
   return true;

}

function validateCheck(){
  if(!checkTouched){
    return false;
  }
  if(!check.checked){
    showErr(checkBox,checkErr,"Please tick the checkbox");
    return false;
  }
  showSucc(checkBox);
   return true;
}

function checkForm(){
  const userValid = validateUserName();
  const emailValid = validateEmail();
  const phoneValid = validatePhone();
  const passValid = validatePass();
  const cpassValid = validateCPass();
  const checkValid = validateCheck();

  if(userValid && emailValid && phoneValid && passValid && cpassValid && checkValid){
    submitbtn.disabled = false;
    submitbtn.classList.add("enable");
  }else{
    submitbtn.disabled = true;
    submitbtn.classList.remove("enable");
  }
}

username.addEventListener("input",() =>{
  userTouched = true;
  checkForm();
})
email.addEventListener("input",() =>{
  emailTouched = true;
  checkForm();
})
phone.addEventListener("input",() =>{
  phoneTouched = true;
  checkForm();
})
password.addEventListener("input",() =>{
  passTouched = true;
  checkForm();
})
cpass.addEventListener("input",() =>{
  cpassTouched = true;
  checkForm();
})

check.addEventListener("input",()=>{
  checkTouched = true;
  checkForm();
})

// main

window.onload = function () {
    username.focus();
    username.select();
  };
toggleEye.forEach((icon)=>{
    icon.addEventListener("click",()=>{
       const input = icon.previousElementSibling;
       if(input.type === "password"){
         input.type = "text";
         icon.classList.replace("fa-eye","fa-eye-slash");
       }else{
         input.type = "password";
         icon.classList.replace("fa-eye-slash","fa-eye");
       }
    })
})


// FORM SUBMIT HANDLER
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop php/page reload

  // force validation before submit
  userTouched = emailTouched = passTouched = cpassTouched = true;
  phoneTouched = true;

  checkForm();

  if (!submitbtn.disabled) {
    popupContainer.style.display = "flex"; // show popup
  }
});

ok.addEventListener("click",()=>{
  location.href = "logine2e.html";
});
//