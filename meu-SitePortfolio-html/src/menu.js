
let btnMenu = document.querySelector(".btn-abrir-menu"); // Botão de abrir
let menuMobile = document.querySelector(".menu-mobile"); // O menu
let btnFechar = document.querySelector(".btn-fechar i"); // Ícone de fechar
let overlay = document.querySelector(".overlay-menu"); // Overlay escuro atrás do menu

// Evento para abrir o menu
btnMenu.addEventListener("click", () => {
  menuMobile.classList.add("abrir-menu");
  overlay.style.display = "block"; // Exibe o overlay quando o menu abrir
});

// Evento para fechar o menu ao clicar no botão de fechar
btnFechar.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
  overlay.style.display = "none"; // Oculta o overlay quando o menu fechar
});

// Fecha o menu ao clicar no overlay
overlay.addEventListener("click", () => {
  menuMobile.classList.remove("abrir-menu");
  overlay.style.display = "none";
});
