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