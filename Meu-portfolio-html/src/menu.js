document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const btnFecharMobile = document.querySelector('#menu-mobile .btn-fechar i');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.querySelector('.overlay-menu');
    const body = document.body;
    const menuIcon = document.querySelector('.menu > .ri-menu-line');
    const closeIcon = document.querySelector('.menu > .ri-close-line');
    const textoDigitando = document.querySelector('.profissao-digitando');
    const multiImageProjects = document.querySelectorAll('.img-port.multi-image');
    const verMaisSecaoBtn = document.getElementById('ver-mais-secao');
    const especialidadesFlex = document.querySelector('.especialidades .flex');
    const verMaisSobreBtn = document.getElementById('ver-mais-sobre');
    const verMenosSobreBtn = document.getElementById('ver-menos-sobre');
    const estudosECertificacoes = document.querySelector('.info-completa');
    const formularioDeContato = document.getElementById('meuFormularioDeContato');
    const mensagemDeConfirmacaoDiv = document.getElementById('mensagemDeConfirmacao');
    const btnInicioFixo = document.getElementById('btn-inicio-fixo');
    const secaoSobre = document.getElementById('Sobre');
    const secaoInicio = document.getElementById('Inicio');


    // Função de abrir o menu mobile
    function abrirMenuMobile() {
        menuMobile.classList.add('abrir-menu');
        overlayMenu.classList.add('abrir-overlay');
        body.classList.add('menu-aberto');
        menuIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
        document.addEventListener('keydown', fecharComEsc);
    }

    // Função de fechar o menu mobile
    function fecharMenuMobile() {
        menuMobile.classList.remove('abrir-menu');
        overlayMenu.classList.remove('abrir-overlay');
        body.classList.remove('menu-aberto');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
        document.removeEventListener('keydown', fecharComEsc);
    }

    // Função para fechar com a tecla ESC
    function fecharComEsc(event) {
        if (event.key === 'Escape' && menuMobile.classList.contains('abrir-menu')) {
            fecharMenuMobile();
        }
    }

    // Função de efeito de digitação
    function digitarTexto() {
        const textoCompleto = "Olá, eu sou Glailton Nascimento, Desenvolvedor Front-End e Back-end.";
        let index = 0;
        const velocidadeDigitacao = 100;

        function digitar() {
            if (index < textoCompleto.length) {
                textoDigitando.textContent += textoCompleto.charAt(index);
                index++;
                setTimeout(digitar, velocidadeDigitacao);
            }
        }
        setTimeout(digitar, 500);
    }

    // Função de animação das imagens de projetos
    function animarImagensProjetos() {
        multiImageProjects.forEach(project => {
            const slider = project.querySelector('.image-slider');
            const overlay = project.querySelector('.overlay');

            if (slider) {
                project.addEventListener('mouseenter', () => {
                    slider.style.animationPlayState = 'paused';
                    overlay.style.opacity = '1';
                });

                project.addEventListener('mouseleave', () => {
                    slider.style.animationPlayState = 'running';
                    overlay.style.opacity = '0';
                });
            }
        });
    }

    // Função para mostrar/ocultar as especialidades
    function alternarEspecialidades() {
        if (verMaisSecaoBtn && especialidadesFlex) {
            verMaisSecaoBtn.addEventListener('click', function () {
                especialidadesFlex.classList.toggle('hidden');

                if (!especialidadesFlex.classList.contains('hidden')) {
                    this.textContent = 'Ver Menos Especialidades';
                } else {
                    this.textContent = 'Ver Mais Especialidades';
                }
            });
        }
    }

    // Função para mostrar/ocultar informações sobre
    function alternarSobre() {
        if (verMaisSobreBtn && verMenosSobreBtn && estudosECertificacoes) {
            estudosECertificacoes.classList.add('hidden');
            verMaisSobreBtn.style.display = 'inline-block';
            verMenosSobreBtn.style.display = 'none';

            verMaisSobreBtn.addEventListener('click', function () {
                estudosECertificacoes.classList.remove('hidden');
                this.style.display = 'none';
                verMenosSobreBtn.style.display = 'inline-block';
            });

            verMenosSobreBtn.addEventListener('click', function () {
                estudosECertificacoes.classList.add('hidden');
                verMaisSobreBtn.style.display = 'inline-block';
                this.style.display = 'none';
            });
        }
    }

    // Função para envio do formulário com EmailJS
    async function enviarFormularioContato(event) {
        event.preventDefault(); // Impede envio padrão

        try {
            const response = await emailjs.sendForm('service_w9htz46', 'template_egpkq9v', formularioDeContato);
            console.log('E-mail enviado com sucesso!', response.status, response.text);

            mensagemDeConfirmacaoDiv.textContent = 'MENSAGEM ENVIADA!';
            mensagemDeConfirmacaoDiv.style.display = 'block';

            formularioDeContato.reset(); // Limpa o formulário

            setTimeout(() => {
                mensagemDeConfirmacaoDiv.style.display = 'none';
            }, 5000);

        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);

            mensagemDeConfirmacaoDiv.textContent = 'Erro ao enviar. Tente novamente!';
            mensagemDeConfirmacaoDiv.style.display = 'block';

            setTimeout(() => {
                mensagemDeConfirmacaoDiv.style.display = 'none';
            }, 5000);
        }
    }

    // Inicializa o EmailJS
    emailjs.init('xlyXUKtB9Z98xFv0g'); // Public Key

    // Evento de clique no menu
    btnMenu.addEventListener('click', abrirMenuMobile);
    btnFecharMobile.addEventListener('click', fecharMenuMobile);
    overlayMenu.addEventListener('click', fecharMenuMobile);

    // Chama as funções
    if (textoDigitando) digitarTexto();
    animarImagensProjetos();
    alternarEspecialidades();
    alternarSobre();

    // Envia o formulário de contato
    if (formularioDeContato) {
        formularioDeContato.addEventListener('submit', enviarFormularioContato);
    }

    function verificarPosicaoSobre() {
        if (!secaoSobre || !secaoInicio || !btnInicioFixo) {
            return;
        }

        const posicaoSobreTopo = secaoSobre.offsetTop;
        const alturaViewport = window.innerHeight;
        const rolagemAtual = window.scrollY;
        const alturaSobre = secaoSobre.offsetHeight;
        const inicioInicioVisivel = secaoInicio.offsetTop + alturaViewport / 2; // Ponto para começar a mostrar o botão

        // Verifica se a seção "Sobre" está totalmente visível na tela
        const sobreVisivel = rolagemAtual >= posicaoSobreTopo && rolagemAtual < (posicaoSobreTopo + alturaSobre - alturaViewport / 4); // Ajuste a margem inferior

        // Verifica se a rolagem passou do ponto inicial para mostrar o botão
        const passouInicio = rolagemAtual > inicioInicioVisivel;

        if (sobreVisivel || !passouInicio) {
            btnInicioFixo.classList.remove('mostrar');
        } else {
            btnInicioFixo.classList.add('mostrar');
        }
    }

    window.addEventListener('load', verificarPosicaoSobre);
    window.addEventListener('scroll', verificarPosicaoSobre);
});

