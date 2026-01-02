
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

