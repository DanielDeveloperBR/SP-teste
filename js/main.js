// Preencher o input no formato do telefone
const formatarTelefone = (numero) => {
    numero = numero.replace(/\D/g, '').slice(0, 11);
    const padroes = [
        { regex: /^(\d{2})(\d{5})(\d{4})$/, formato: '($1) $2-$3' },
        { regex: /^(\d{2})(\d{4})(\d{0,4})$/, formato: '($1) $2-$3' },
        { regex: /^(\d{2})(\d{0,5})$/, formato: '($1) $2' },
        { regex: /^(\d{0,2})$/, formato: '($1' }
    ];
    const padrao = padroes.find(p => p.regex.test(numero));
    return padrao ? numero.replace(padrao.regex, padrao.formato) : numero;
};

document.getElementById('telefone').addEventListener('input', (e) => {
    e.target.value = formatarTelefone(e.target.value);
});

const mensagem = (msg) => {
    const mensagem = document.getElementById('mensagem')
    mensagem.style.display = 'block'
    return mensagem.textContent = msg
}

const removerMensagem = () => {
    document.getElementById('mensagem').textContent = ''
    return document.getElementById('mensagem').style.display = 'none'
}


const formulario = document.getElementById('formTeste');
formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const telefoneInput = document.getElementById('telefone');

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const telefone = telefoneInput.value.trim();

    const validarEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    const validarTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;

    // Funções para exibir e limpar o erro
    const erro = (input) => input.style.border = "1px solid red";
    const limparErro = (input) => input.style.border = "1px solid #ccc";

    let mensagemErro = "";

    // Validação do campo nome
    if (nome === "") {
        erro(nomeInput);
        mensagemErro = "Preencha o nome!";
    } else {
        limparErro(nomeInput);
    }

    // Validação do campo email
    if (email === "") {
        erro(emailInput);
        mensagemErro = "Preencha o email!";
    } else if (!validarEmail.test(email)) {
        erro(emailInput);
        mensagemErro = "Preencha um email válido: seuemail@exemplo.com";
    } else {
        limparErro(emailInput);
    }

    // Validação do telefone
    if (telefone === "") {
        erro(telefoneInput);
        mensagemErro = "Preencha o telefone!";
    } else if (!validarTelefone.test(telefone)) {
        erro(telefoneInput);
        mensagemErro = "Preencha um telefone válido: (11)-98765-1234";
    } else {
        limparErro(telefoneInput);
    }

    if (mensagemErro) {
        const msg = mensagem(mensagemErro);
        setTimeout(() => {
            setTimeout(() => {
                removerMensagem()
                clearTimeout(msg)
            },3000)
        }, 1000)
        return;
    }

    const capitalizado = nome.charAt(0).toUpperCase() + nome.slice(1);
    const h1 = document.querySelector('.h1Section');
    h1.innerHTML = "Bem-vindo, " + capitalizado + "!";
    try {
        mensagem("Bem-vindo, " + nome);
        setTimeout(() => {
        formulario.style.display = 'none';
        document.querySelector('header').style.display = 'flex';
        document.querySelector('main').style.display = 'block';
        document.querySelector('footer').style.display = 'flex';
        removerMensagem()
    }, 1500)

        setTimeout(() => {
            h1.style.animation = `fadeOutUp 1s forwards`;
            setTimeout(() => {
                h1.style.display = 'none';
                const hero = document.querySelector('.hero-section');
                hero.style.animation = `fadeInUp .5s forwards`;
                document.querySelector('.promocao').style.display = 'flex';
            }, 700);
        }, 2900);
    } catch (error) {
        console.error("Erro: ", error);
    }
});


//Contagem regressiva
const contador = document.getElementById('contador')
let segundos = 60
let minutos = 2

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