'use strict';

const toggleBtn = document.querySelector('.toggle-btn');
const navbarMenu = document.querySelector('.header-nav-nav');
// console.log(navbarMenu);
// console.log(toggleBtn);

toggleBtn.addEventListener('click', () => {
  // console.log('i am clicked');
  navbarMenu.classList.toggle('show-nav');
});

$(function(){
  $('.menu-item').each(function(){
      $(this).hover(function(){            
          $(this).children('.submenu').stop().slideToggle(300);
      });
  });
});

let defaultTransform = 0;
function goNext() {
    defaultTransform = defaultTransform - 250;
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
next.addEventListener("click", goNext);
function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + 250;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}
setInterval(goNext, 5000)
prev.addEventListener("click", goPrev);
