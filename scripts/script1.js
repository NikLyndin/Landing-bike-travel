document.addEventListener("DOMContentLoaded", ()=>{
  init()
})
function init() {
  if(localStorage.getItem('theme')) {
    document.documentElement.setAttribute("theme", "dark");
  }
  else {
    document.documentElement.removeAttribute("theme");
  }
  
}
const toggleBtn = document.querySelector("#toggle-theme");
toggleBtn.addEventListener("click", function() {
  if(document.documentElement.hasAttribute("theme")){
    document.documentElement.removeAttribute("theme");
    localStorage.removeItem('theme');
  }
  else{
    document.documentElement.setAttribute("theme", "dark");
    localStorage.setItem('theme', 1);
  }
});

function changeClass() {
    document.getElementById("toggle-theme").className += " switch-on";
}

window.onload = function(){
    document.getElementById("toggle-theme").addEventListener( 'click', changeClass);
}