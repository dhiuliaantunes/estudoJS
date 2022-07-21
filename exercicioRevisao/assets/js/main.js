const form = document.querySelector(`#form`); //id do formulario

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso'); //pegando o evento recebido em peso dentro do formulario
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value); //recebendo o VALOR do peso
    const altura = Number(inputAltura.value); //recebendo o VALOR do peso

    if(!peso){ //se o peso for invalido, um NaN
        setResultado("Peso inválido", false);
        return;
    }

    if(!altura){ //se o peso for invalido, um NaN
        setResultado("Altura inválida", false);
        return;
    }

    const imc = getImc(peso, altura);
    const classificacao = getClassificacaoImc(imc);

    setResultado(`O IMC é: ${imc} (${classificacao})`, true);
}); //qual evento sera add

function getClassificacaoImc(imc){
    const classificacao = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
    'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

    if(imc >= 39.9)return classificacao[5];
    if (imc >= 34.9) return classificacao[4];
    if (imc >= 29.9) return classificacao[3];
    if (imc >= 24.9) return classificacao[2];
    if (imc >= 18.5) return classificacao[1];
    if (imc < 18.5) return classificacao[0];
}

function getImc(peso, altura){
    const imc = peso / (altura^2);
    return imc.toFixed(2);
}

function paragrafo(){
    const p = document.createElement('p'); //criando um parágrafo
    return p;
}

function setResultado(msg, isValid){
    const resultado = document.querySelector('#resultado'); //id do resultado na div do html
    resultado.innerHTML = '';

    const p = paragrafo();

    if(isValid){
        p.classList.add('paragrafoA')
    } else{
        pb.classList.add('paragrafoB')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)
}