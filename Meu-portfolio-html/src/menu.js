const btnAbrirMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const btnFecharMenu = menuMobile ? menuMobile.querySelector('.btn-fechar i') : null;
const overlayMenu = document.querySelector('.overlay-menu');
const btnInicioFixo = document.getElementById('btn-inicio-fixo');
const menuPrincipal = document.getElementById('menuPrincipal');
const linksMenuMobile = menuMobile ? menuMobile.querySelectorAll('nav ul a') : []; // Seleciona todos os links do menu mobile

function fecharMenu() {
    if (menuMobile) {
        menuMobile.classList.remove('abrir-menu');
    }
    if (overlayMenu) {
        overlayMenu.style.display = 'none';
    }
}

if (btnAbrirMenu && menuMobile) {
    btnAbrirMenu.addEventListener('click', () => {
        menuMobile.classList.add('abrir-menu');
        if (overlayMenu) {
            overlayMenu.style.display = 'block';
        }
    });
}

if (btnFecharMenu && menuMobile) {
    btnFecharMenu.addEventListener('click', fecharMenu);
}

if (overlayMenu && menuMobile) {
    overlayMenu.addEventListener('click', fecharMenu);
}

// Adicionando o event listener para a tecla Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' || event.keyCode === 27) {
        fecharMenu();
    }
});

// Modificando o comportamento do botão "Início" fixo
if (btnInicioFixo && menuPrincipal) {
    btnInicioFixo.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link (#Inicio)

        const menuOffsetTop = menuPrincipal.offsetTop;

        window.scrollTo({
            top: menuOffsetTop,
            behavior: 'smooth'
        });
    });
}

// ADICIONANDO A LÓGICA PARA ABRIR E FECHAR O MENU AO CLICAR NOS LINKS
linksMenuMobile.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link (ir direto para a âncora)

        const targetId = link.getAttribute('href'); // Obtém o ID da seção alvo
        const targetElement = document.querySelector(targetId); // Seleciona a seção alvo

        fecharMenu(); // Fecha o menu ao clicar no link

        if (targetElement) {
            targetElement.scrollIntoView({ // Rola suavemente até a seção
                behavior: 'smooth'
            });
        }
    });
});

// Lógica para abrir o menu automaticamente em telas menores (mantendo, mas lembre-se da UX)
function abrirMenuAutomaticamente() {
    if (window.innerWidth <= 1041) {
        if (menuMobile && overlayMenu && !menuMobile.classList.contains('abrir-menu')) {
            menuMobile.classList.add('abrir-menu');
            overlayMenu.style.display = 'block';
        }
    } else {
        fecharMenu(); // Garante que o menu esteja fechado em telas maiores
    }
}

// Chame a função ao carregar a página
window.addEventListener('load', abrirMenuAutomaticamente);

// Chame a função ao redimensionar a janela (com cuidado para não ser intrusivo em desktop)
window.addEventListener('resize', abrirMenuAutomaticamente);