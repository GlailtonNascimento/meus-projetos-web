document.addEventListener('DOMContentLoaded', () => {
    // Seleção de elementos
    const btnMenu = document.querySelector(".btn-abrir-menu");
    const menuMobile = document.querySelector(".menu-mobile");
    const btnFechar = document.querySelector(".btn-fechar i");
    const overlay = document.querySelector(".overlay-menu");
    const btnVoltarTopo = document.getElementById('btn-voltar-topo');
    const inicioSection = document.getElementById('Inicio');
    const menuLinksMobile = document.querySelectorAll('.menu-mobile nav ul a');
    const btnTopoFlutuante = document.getElementById('btn-topo-flutuante');

    // Funções para o menu mobile
    const abrirMenu = () => {
        menuMobile.classList.add("abrir-menu");
        overlay.style.display = "block";
    };

    const fecharMenu = () => {
        menuMobile.classList.remove("abrir-menu");
        overlay.style.display = "none";
    };

    // Funções para o botão voltar ao topo
    const exibirOcultarBotao = () => {
        if (!inicioSection || !btnVoltarTopo || !btnTopoFlutuante) return;

        // Obtém a posição vertical do topo da seção "INÍCIO" em relação à viewport
        const inicioTopPosition = inicioSection.getBoundingClientRect().top;

        if (inicioTopPosition < 0) {
            btnVoltarTopo.style.display = 'flex'; // Ou 'block'
            btnTopoFlutuante.style.display = 'flex'; // Mostra o novo botão flutuante
        } else {
            btnVoltarTopo.style.display = 'none';
            btnTopoFlutuante.style.display = 'none';
        }
    };

    const voltarParaInicio = () => {
        if (inicioSection) {
            inicioSection.scrollIntoView({ behavior: 'smooth' });
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

    // Event listeners para o botão voltar ao topo
    window.addEventListener('scroll', exibirOcultarBotao);
    btnVoltarTopo.addEventListener('click', voltarParaInicio);
    btnTopoFlutuante.addEventListener('click', voltarParaInicio);

    // Rolar para o topo ao clicar em um item do menu mobile
    menuLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            fecharMenu(); // Opcional: fechar o menu ao clicar no link
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });

    // Executa a função de exibição/ocultação na carga da página
    exibirOcultarBotao();
});