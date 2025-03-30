document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form'); // Seleciona o formulário de contato

    (function () {
        emailjs.init('xlyXUKtB9Z98xFv0g'); // Sua Chave Pública
    })();

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            emailjs.sendForm('service_w9htz46', 'template_egpkq9v', this) // Seu ID do Serviço e ID do Template
                .then(function () {
                    console.log('SUCCESS!');
                    alert('Mensagem enviada com sucesso!');
                    form.reset();
                }, function (error) {
                    console.log('FAILED...', error);
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                });
    }
});