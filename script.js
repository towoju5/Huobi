'use strict';

const toggleBtn = document.querySelector('.toggle-btn');
const navbarMenu = document.querySelector('.header-nav-nav');
console.log(navbarMenu);
console.log(toggleBtn);

toggleBtn.addEventListener('click', () => {
  console.log('i am clicked');
  navbarMenu.classList.toggle('show-nav');
});
