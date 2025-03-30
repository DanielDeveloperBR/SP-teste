const formulario = document.getElementById('formTeste')
formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = document.getElementById('nome').value.trim()
    const email = document.getElementById('email').value.trim()
    const telefone = document.getElementById('telefone').value.trim()

    const validarEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i
    const validarTelefone = /^(\d{2})(\d{5})(\d{4})$/

    if (!validarEmail.test(email)) {
        alert("Preencha um email válido: seuemail@exemplo.com")
        return
    }
    if (!validarTelefone.test(telefone)) {
        alert("Preencha um telefone válido: (11)-98765-1234")
        return
    }
    if (nome === "" || email === "" || telefone === "") {
        alert("Preencha os campos em brancos!")
        return
    }

    alert("Bem vindo, " + nome)
    const capitalizado = nome.charAt(0).toUpperCase() + nome.slice(1);
    const h1 = document.querySelector('.h1Section')
    h1.innerHTML = "Bem vindo, " + capitalizado + "!"

    formulario.style.display = 'none'
    document.querySelector('header').style.display = 'flex'
    document.querySelector('main').style.display = 'block'
    document.querySelector('.promocao').style.display = 'flex'
    document.querySelector('footer').style.display = 'flex'
})

const contador = document.getElementById('contador')
let segundos = 60
let minutos = 9

const intervalo = setInterval(() => {
    const formatoMinutos = String(minutos).padStart(2, '0');
    const formatoSegundos = String(segundos).padStart(2, '0');
    contador.textContent = `${formatoMinutos}:${formatoSegundos}`;
    if (minutos == 0 && segundos <= 0) {
        segundos = 0
        clearInterval(intervalo)
        contador.textContent = "00:00"
        return
    }
    if (segundos <= 0) {
        segundos = 60
        minutos--
    }
    segundos--
}, 1000)


const linksMenu = document.querySelectorAll('nav li a');

// Adicione o evento de clique a cada link do menu
linksMenu.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 

        // Obtenha o ID da seção de destino a partir do atributo "href" do link
        const destinoID = link.getAttribute('href');

        // Obtenha a seção de destino com base no ID
        const destinoSection = document.querySelector(destinoID);

        // Verifique se o elemento de destino foi encontrado antes de rolar
        if (destinoSection) {
            // Rola um pouco acima da seção de destino
            const offset = -145; 
            window.scroll({
                top: destinoSection.getBoundingClientRect().top + window.scrollY + offset,
                behavior: 'smooth'
            });

        }
    })
})