let listadenumerosSorteados = [];
let numeroLimite = 30;
let numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;

function escrever(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Male");
}

function obterPalavraTentativas(numero) {
    return numero > 1 ? "tentativas" : "tentativa";
}

escrever("h1", "Adivinhe o número");
escrever("p", "Escolha um número entre 1 e 30");

function mensagemInicial() {
    escrever("h1", "Adivinhe o número");
    escrever("p", "Escolha um número entre 1 e 30");
}


function verificarChute() {
    let chute = document.querySelector("input").value;
    if (chute == numeroAleatorio) {
        escrever("h1", "Você acertou!");
        escrever("p", "Você ganhou! Foi necessário " + tentativas + " " + obterPalavraTentativas(tentativas) + ".");
        document.getElementById("reiniciar").disabled = false;
    } else {
        if (chute > numeroAleatorio) {
            escrever("p", "O número é menor que " + chute);
        } else {
            escrever("p", "O número é maior que " + chute);
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo() {
    chute = document.querySelector("input").value = "";
}



function gerarNumeroAleatorio() {
    let numeroAleatorio = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumerosSorteados = listadenumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == 3) {
        listadenumerosSorteados = [];
    }

    if (listadenumerosSorteados.includes(numeroAleatorio)) {
        return gerarNumeroAleatorio(); // Chama a função novamente para gerar outro número
    } else {
        listadenumerosSorteados.push(numeroAleatorio);
        console.log(listadenumerosSorteados);
        return numeroAleatorio;
    }
}

function reiniciarJogo() {
    numeroAleatorio = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial()
    document.getElementById("reiniciar").disabled = true;
}


