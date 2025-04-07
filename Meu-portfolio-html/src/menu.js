const btnAbrirMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const btnFecharMenu = menuMobile ? menuMobile.querySelector('.btn-fechar i') : null;
const overlayMenu = document.querySelector('.overlay-menu');

if (btnAbrirMenu && menuMobile) {
    btnAbrirMenu.addEventListener('click', () => {
        menuMobile.classList.add('abrir-menu');
        if (overlayMenu) {
            overlayMenu.style.display = 'block';
        }
    });
}

if (btnFecharMenu && menuMobile) {
    btnFecharMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        if (overlayMenu) {
            overlayMenu.style.display = 'none';
        }
    });
}

if (overlayMenu && menuMobile) {
    overlayMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.style.display = 'none';
    });
}