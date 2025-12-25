
let email = document.getElementById('email');
let form = document.querySelector('form');
let password = document.getElementById('password');
let submitbtn = document.getElementById('submit');
let toggleEye = document.querySelectorAll('.toggle-pass');

// let emailTouched = false;
// let passTouched = false;


window.onload = function () {
    email.focus();
    email.select();
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
