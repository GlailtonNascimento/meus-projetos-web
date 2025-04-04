document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    emailjs.init('xlyXUKtB9Z98xFv0g'); // Sua Chave Pública

    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            const submitButton = form.querySelector('input[type="submit"]');
            submitButton.disabled = true; // Desabilita o botão durante o envio
            submitButton.value = 'Enviando...'; // Altera o texto do botão

            emailjs.sendForm('service_w9htz46', 'template_egpkq9v', this) // Seu ID do Serviço e ID do Template
                .then(function () {
                    console.log('SUCCESS!');
                    alert('Mensagem enviada com sucesso!');
                    form.reset();
                    submitButton.value = 'ENVIAR'; // Restaura o texto do botão
                }, function (error) {
                    console.error('FAILED...', error);
                    alert('Ocorreu um erro ao enviar a mensagem. Tente novamente.');
                    submitButton.value = 'ENVIAR'; // Restaura o texto do botão
                })
                .finally(() => {
                    submitButton.disabled = false; // Reabilita o botão após o envio
                });
        });
    }
});