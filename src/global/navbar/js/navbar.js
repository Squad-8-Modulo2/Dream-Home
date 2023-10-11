// Seletores de elementos
const menuHamburger = document.getElementById("menu_hamburger");
const navList = document.getElementById("nav_list");
const closeMenu = document.getElementById("close_menu");

// Funções de utilidade
const toggleOpacity = (element, opacity) => {
  element.style.opacity = opacity;
};

const toggleDisplay = (element, display) => {
  element.style.display = display;
};

// Funções de manipulação de menu
const openMenuHamburger = () => {
  navList.classList.add("mobile_menu");
  toggleOpacity(menuHamburger, 0);
  toggleDisplay(closeMenu, "block");
  toggleOpacity(closeMenu, 1);
};

const closeMenuHamburger = () => {
  navList.classList.remove("mobile_menu");
  toggleOpacity(closeMenu, 0);
  toggleDisplay(closeMenu, "none");
  toggleDisplay(menuHamburger, "block");
  toggleOpacity(menuHamburger, 1);
};

// Eventos
menuHamburger.addEventListener("click", openMenuHamburger);
closeMenu.addEventListener("click", closeMenuHamburger);

// REDIRECIONA PAGINAS
