const botaoX = document.querySelector('.promocao span');
botaoX.addEventListener('click', () => {
    const promocao = document.querySelector('.promocao');
    const depoimentos = document.querySelector('.h2Depoimentos');

    setTimeout(() => {
        promocao.style.animation = 'fadeInDown .6s linear';
        
        // Move a seção de promoção para cima dos depoimentos
        depoimentos.parentNode.insertBefore(promocao, depoimentos);
        
        setTimeout(() => {
            document.querySelector('#btnTopo').style.bottom = '20px';
            promocao.style.position = 'static';
            promocao.style.borderRadius = '15px';
        }, 600);
    }, 800);

    botaoX.style.display = 'none';
});
