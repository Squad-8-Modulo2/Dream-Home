const menuHamburger = document.getElementById("menu_hamburger");
const navList = document.getElementById("nav_list");
const closeMenu = document.getElementById("close_menu");

menuHamburger.addEventListener("click", () => {
  navList.classList.add("mobile_menu");
});

closeMenu.addEventListener("click", () => {
  navList.classList.remove("mobile_menu");
});

const toggleOpacity = (element, opacity) => {
  element.style.opacity = opacity;
};

const toggleDisplay = (element, display) => {
  element.style.display = display;
};

// Lida com o foco do elemento de input
const openMenuHamburger = () => {
  toggleOpacity(menuHamburger, 0);
  toggleDisplay(closeMenu, "block");
  toggleOpacity(closeMenu, 1);
};

const closeMenuHamburger = () => {
  toggleOpacity(closeMenu, 0);
  toggleDisplay(closeMenu, "none");
  toggleDisplay(menuHamburger, "block");
  toggleOpacity(menuHamburger, 1);
};

// Eventos
menuHamburger.addEventListener("click", openMenuHamburger);
closeMenu.addEventListener("click", closeMenuHamburger);
