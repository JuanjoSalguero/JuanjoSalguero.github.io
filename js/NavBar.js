const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

/* Toggle mobile menu */
function toggleMenu() {
  menu.classList.toggle("active");
  const icon = toggle.querySelector("a i.fas");
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
}

/* Closes the menu when an opction is selected */
const menuItems = menu.querySelectorAll(".item");

for (let item of menuItems) {
  item.addEventListener("click", toggleMenu);
}

/* Event Listeners */
toggle.addEventListener("click", toggleMenu, false);
/* Closes de menú if is pressed outside the menu */
document.addEventListener("click", function (event) {
  if (menu.classList.contains("active") && !event.target.closest(".menu") && !event.target.closest(".toggle")) {
    toggleMenu();
  }
});


