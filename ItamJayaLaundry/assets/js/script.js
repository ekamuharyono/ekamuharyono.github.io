const menu = document.querySelectorAll('#menu-button');
const menuButton = document.querySelectorAll('#menu-icon');
const mobileNav = document.getElementById('mobile-nav');

function handleMenu(){
  menuButton[0].classList.toggle('hidden');
  menuButton[1].classList.toggle('hidden');
  mobileNav.classList.toggle('ml-96');
  mobileNav.classList.toggle('hidden');
  // mobileNav.classList.toggle('');
}

menu[0].onclick = handleMenu;
menu[1].onclick = handleMenu;