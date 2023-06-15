'use strict';

const toggleBtn = document.querySelector('.toggle-btn');
const navOnSmallScreen = document.querySelector('.navOnSmallScreen');
console.log(navOnSmallScreen);
console.log(toggleBtn);

toggleBtn.addEventListener('click', () => {
  console.log('i am clicked');
  navOnSmallScreen.classList.toggle('hidden');
});
