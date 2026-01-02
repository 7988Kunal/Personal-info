
// Preloader JS

window.addEventListener("load",()=>{
  let preloader = document.querySelector('#preloader');
  let content = document.querySelector('#content');
  setTimeout(()=>{
    preloader.classList.add('hidden');
    setTimeout(()=>{
      preloader.computedStyleMap.display = "none";
      content.classList.remove('hidden');
    },600)
  },6000)
})