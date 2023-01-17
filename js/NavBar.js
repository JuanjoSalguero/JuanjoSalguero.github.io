const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
  menu.classList.toggle("active");
  const icon = toggle.querySelector("a i.fas");
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
}

/* Event Listeners */
menu.addEventListener("click", toggleMenu, false);
