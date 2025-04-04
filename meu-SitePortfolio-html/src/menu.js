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

// Fechar com ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuMobile.classList.contains("abrir-menu")) {
    menuMobile.classList.remove("abrir-menu");
    overlay.style.display = "none";
  }
});

document.addEventListener('DOMContentLoaded', () => {
    const btnVoltarTopo = document.getElementById('btn-voltar-topo');

    // Mostra/oculta o botão com base na posição de rolagem
    const exibirOcultarBotao = () => {
        if (window.scrollY > 300) {
            btnVoltarTopo.classList.add('mostrar');
        } else {
            btnVoltarTopo.classList.remove('mostrar');
        }
    };

    // Adiciona o evento de rolagem
    window.addEventListener('scroll', exibirOcultarBotao);

    // Rola para o topo ao clicar no botão
    btnVoltarTopo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Rola para o topo ao clicar em um item do menu mobile
    const menuLinks = document.querySelectorAll('.menu-mobile nav ul a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Executa a função de exibição/ocultação na carga da página
    exibirOcultarBotao();
});