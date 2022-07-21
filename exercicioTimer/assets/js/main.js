const relogio = document.querySelector(`.relogio`); //capturando evento dos botoes
const iniciar = document.querySelector(`#iniciar`);
const pausar = document.querySelector(`#pausar`);
const zerar = document.querySelector(`#zerar`);
let segundos = 0;
let timer;

iniciar.addEventListener('click', function(event){ //adicionando o evento do botao iniciar, tipo click, definindo o que vai ser feito quando clicado
    //alert('iniciar');
    clearInterval(timer);
    iniciaRelogio();
});

pausar.addEventListener('click', function(event){
    //alert('pausar');
    clearInterval(timer);
    
});

zerar.addEventListener('click', function(event){ 
    //alert('zerar');
    clearInterval(timer);
    relogio.innerHTML = `00:00:00`;
});

function gerandoHora(sec){
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString(`pt-BR`, {
        hour12: false, 
        timeZone: 'GMT'
    });
};

function iniciaRelogio(){
    const timer = setInterval(function (){ //utilizando funcao anonima
    segundos++;
    relogio.innerHTML = gerandoHora(segundos);
    }, 1000);
};
