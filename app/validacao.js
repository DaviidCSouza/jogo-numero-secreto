function valorValido(chute) {

    const palavraChave = [
        "bunda", "peito", "xereca", "cuzao", "cuzinho"
    ]
    const validaPalavraChave = palavraChave.includes(chute)

    if (validaPalavraChave) {
        var numero = chute
    }
    else{
        var numero = +chute
    }


    if (chuteInvalido(numero)) {
        elementoChute.innerHTML += '<div>valor falado não é um numero</div>'
        return
    }

    if (numeroMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
        <div>Valor fora do range. Fale um número entre ${menorValor} e ${maiorValor}</div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Você acertou!</h2>
        <h3>O número secreto era ${numeroSecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
        `
    }
    else if (numero > numeroSecreto) { 
        elementoChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

    if (validaPalavraChave) {
        elementoChute.innerHTML += '<div>Você disse uma palavra especial!!!</div>'
    }
}

function chuteInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e =>{
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})