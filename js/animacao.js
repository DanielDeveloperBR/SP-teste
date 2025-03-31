const botaoX = document.querySelector('.promocao span');
botaoX.addEventListener('click', () => {
    const promocao = document.querySelector('.promocao');
    const depoimentos = document.querySelector('.h2Depoimentos');

    // Aplicar animação de entrada uma única vez
    promocao.style.animation = 'fadeInDown 400ms';

    // Remover animação após execução
    promocao.addEventListener('animationend', () => {
        promocao.style.animation = ''; // Remove a animação depois de concluída
        depoimentos.parentNode.insertBefore(promocao, depoimentos);
        document.querySelector('#btnTopo').style.bottom = '20px';
        promocao.style.borderRadius = '15px';
        promocao.style.position = 'unset'; // ou 'static', dependendo do seu layout
    });
    botaoX.style.display = 'none';
});