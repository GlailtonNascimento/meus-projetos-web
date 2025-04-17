document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const btnFecharMobile = document.querySelector('#menu-mobile .btn-fechar i');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.querySelector('.overlay-menu');
    const body = document.body;
    const menuIcon = document.querySelector('.menu > .ri-menu-line');
    const closeIcon = document.querySelector('.menu > .ri-close-line');

    function abrirMenuMobile() {
        menuMobile.classList.add('abrir-menu');
        overlayMenu.classList.add('abrir-overlay');
        body.classList.add('menu-aberto');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.addEventListener('keydown', fecharComEsc);
    }

    function fecharMenuMobile() {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.classList.remove('abrir-overlay');
        body.classList.remove('menu-aberto');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.removeEventListener('keydown', fecharComEsc);
    }

    function fecharComEsc(event) {
        if (event.key === 'Escape' && menuMobile.classList.contains('abrir-menu')) {
            fecharMenuMobile();
        }
    }

    btnMenu.addEventListener('click', abrirMenuMobile);
    btnFecharMobile.addEventListener('click', fecharMenuMobile);
    overlayMenu.addEventListener('click', fecharMenuMobile);

    // --- Código para o efeito de digitação (MODIFICADO) ---
    const textoDigitando = document.querySelector('.profissao-digitando');
    const textoCompleto = "Olá, eu sou Glailton Nascimento, Desenvolvedor Front-End e Back-end."; // Texto completo
    textoDigitando.textContent = "";
    let index = 0;
    const velocidadeDigitacao = 100; // Ajustei a velocidade para um texto maior

    function digitarTexto() {
        if (index < textoCompleto.length) {
            textoDigitando.textContent += textoCompleto.charAt(index);
            index++;
            setTimeout(digitarTexto, velocidadeDigitacao);
        }
    }

    if (textoDigitando) {
        setTimeout(digitarTexto, 500);
        digitarTexto();
    }
});