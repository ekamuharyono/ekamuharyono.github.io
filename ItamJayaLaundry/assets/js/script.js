const menu = document.getElementById('menu');
const menuButton = document.querySelectorAll('#menu-icon');
const mobileNav = document.getElementById('mobile-nav');

function handleMenu(){
  menuButton[0].classList.toggle('hidden');
  menuButton[1].classList.toggle('hidden');
  mobileNav.classList.toggle('ml-96');
  mobileNav.classList.toggle('hidden');
}

menu.onclick = handleMenu;