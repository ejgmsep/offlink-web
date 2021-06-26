const navToggle = document.querySelector(".nav__toggle");
const navMenu = document.querySelector(".header__ul");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});
