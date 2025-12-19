let username = document.getElementById('username');
let toggleEye = document.querySelectorAll('.toggle-pass');

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

