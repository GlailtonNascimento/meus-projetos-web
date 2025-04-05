document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos
    const btnMenu = document.querySelector(".btn-abrir-menu");
    const menuMobile = document.querySelector(".menu-mobile");
    const btnFechar = document.querySelector(".btn-fechar i");
    const overlay = document.querySelector(".overlay-menu");
    const btnInicioFixo = document.getElementById('btn-inicio-fixo');
    const inicioSection = document.getElementById('Inicio');
    const menuLinksMobile = document.querySelectorAll('.menu-mobile nav ul a');
    const btnTopoFlutuanteLateral = document.getElementById('btn-topo-flutuante-lateral');

    // Funções para o menu mobile
    const abrirMenu = () => {
        menuMobile.classList.add("abrir-menu");
        overlay.style.display = "block";
    };

    const fecharMenu = () => {
        menuMobile.classList.remove("abrir-menu");
        overlay.style.display = "none";
    };

    const voltarParaInicio = () => {
        if (inicioSection) {
            inicioSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Função para exibir/ocultar o botão flutuante lateral
    const exibirOcultarBotaoLateral = () => {
        if (!inicioSection || !btnTopoFlutuanteLateral) return;

        const inicioTopPosition = inicioSection.getBoundingClientRect().top;

        if (inicioTopPosition < 0) {
            btnTopoFlutuanteLateral.style.display = 'flex'; // Ou 'block'
        } else {
            btnTopoFlutuanteLateral.style.display = 'none';
        }
    };

    // Event listeners para o menu mobile
    btnMenu.addEventListener("click", abrirMenu);
    btnFechar.addEventListener("click", fecharMenu);
    overlay.addEventListener("click", fecharMenu);

    // Fechar com ESC
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && menuMobile.classList.contains("abrir-menu")) {
            fecharMenu();
        }
    });

    // Event listeners para o botão "INÍCIO" fixo
    btnInicioFixo.addEventListener('click', voltarParaInicio);

    // Event listeners para o botão flutuante lateral
    window.addEventListener('scroll', exibirOcultarBotaoLateral);
    btnTopoFlutuanteLateral.addEventListener('click', voltarParaInicio);

    // Rolar para o topo ao clicar em um item do menu mobile
    menuLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            fecharMenu();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Executa a função de exibição/ocultação na carga da página
    exibirOcultarBotaoLateral(); // Executa para verificar na carga inicial
});