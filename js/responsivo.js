document.querySelector('#burguer').addEventListener('click', clickMenu)
const navegacao = document.querySelector('nav')
function clickMenu(){
    
    if (navegacao.style.display === 'none' || navegacao.style.display === ""){
        navegacao.style.display = 'block'
    }else{
        navegacao.style.display = 'none'
    }
}

window.addEventListener("resize", checarTela)
function checarTela() {
  if (window.innerWidth >= 585) {
    navegacao.style.display = "block"
  } else {
    navegacao.style.display = "none"
  }
}

// Função para voltar ao topo
function voltarAoTopo() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Monitorar o scroll da página
window.addEventListener('scroll', () => {
  const btnTopo = document.getElementById('btnTopo');
  const footer = document.querySelector('footer');
  const promocao = document.querySelector('.promocao')

  // Verificar se o footer está visível
  const rect = footer.getBoundingClientRect();
  const footerVisivel = rect.top <= window.innerHeight && rect.bottom >= 0;

  if (promocao.style.display === 'flex' && promocao.style.position === 'static'){
    btnTopo.style.bottom = '20px'
  }else {
    btnTopo.style.bottom = '215px'
  }

  // Mostrar ou ocultar o botão
  if (footerVisivel && footer.style.display === 'flex' && promocao.style.display === 'flex') {
      btnTopo.style.display = 'block';
  } else {
      btnTopo.style.display = 'none';
  }
});