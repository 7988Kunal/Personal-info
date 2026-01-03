
// Preloader JS

window.addEventListener("load",()=>{
  let preloader = document.querySelector('#preloader');
  let content = document.querySelector('#content');
  let body = document.querySelector('body');
  setTimeout(()=>{
    preloader.classList.add('hidden');
    setTimeout(()=>{
      body.classList.remove('loading');
      preloader.computedStyleMap.display = "none";
      content.classList.remove('hidden');
    },600)
  },1000)
})

// more bar js

let moreDropdown = document.getElementById('more-dropdown');
let moreDrop = document.getElementById('more-drop');
let moreBox = document.getElementById('more-box');
let moreBar = document.getElementById('more-bar');
let menuIcon = document.getElementById('menu-icon');
let sideMenu = document.getElementById('side-menu');
let menuOne = document.getElementById('menu-one');


moreDropdown.addEventListener("click",()=>{
 const isOpen = moreBar.classList.toggle("show");
 moreDropdown.innerText = isOpen ? "More  △" : "More  ▽";
});
moreDrop.addEventListener("click",()=>{
 const isOpen = moreBox.classList.toggle("show");
 moreDrop.innerText = isOpen ? "More  △" : "More  ▽";
});
menuOne.addEventListener("click",()=>{
  const isOpen = sideMenu.classList.toggle("show");
  // let src1 = menuIcon.getAttribute("src");
  menuOne.innerHTML = isOpen ? '<img id="menu-icon"  src="https://i.ibb.co/d06FpTL7/file-00000000f6747209bb93b29bbb8445c0.png"  alt="menu-icon">' : '<img id="menu-icon"  src="https://i.ibb.co/p6n5xLTV/IMG-20260103-WA0020.jpg"  alt="menu-icon">';
});
