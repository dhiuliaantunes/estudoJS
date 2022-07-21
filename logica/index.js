/* OPERADORES DE COMPARAÇÃO
> maior
>= maior igual
< menor
<= menor igual
== igualdade valor
=== igualdade estrtita  valor e tipo
!= diferente valor
!== diferente estritro  valor e tipo
*/

//console.log(10 > 5) //comparacao retornando bool
// const number = 10;
// const string = '10';
// console.log(number == string) //true
// console.log(number === string) //false


/* OPERADORES LÓGICOS
&& -> and
|| -> or
! -> not
*/


/* SHORT CIRCUIT
FALSY
false,
0,
NaN
' ', ´´  string vazia
null / undefinied
*/
// const corInformada = 'branco';
// const corEscolhida = corInformada || 'azul'; //se cor informada for null, escolhera azul
// console.log(corEscolhida)


//CONDICIONAIS
// const hora =  19;

// if(hora <= 12){
//     console.log("bom dia!")
// } else {
//     if(hora >= 12 && hora < 19){
//         console.log("boa tarde!")
//     } else{
//         console.log("boa noite!")
//     }
// }


//OPERAÇÃO TERNÁRIA
// (condicaa) ? 'valor para verdadeiro' : 'valor para falso'
// const pontuacao = 1000;
// const nivelUsuario = pontuacao >= 1000 ? 'Usuário Vip' : 'Usuário Normal'
// se a pontuacao do usuario for maior igual a 1000, a condição verdadeira retornara 'usuario vip'. se falso, 'usuario normal'
// console.log(nivelUsuario)


//OBJETO DATE
// const data = new Date;
// console.log(data.toString());


//SWITCH/CASE
// const data = new Date('2021-05-16 00:00:00')
// const diaDaSem = data.getDay() //retorna qual o dia da semana entre 0-7

// switch(diaDaSem){
//     case 0:
//         console.log('Domingo');
//     break;
//     case 1:
//         console.log('Segunda-feira');
//     break;
//     case 2:
//         console.log('Terça-feira');
//     break;
//     case 3:
//         console.log('Quarta-feira');
//     break;
//     case 4:
//         console.log('Quinta-feira');
//     break;
//     case 5:
//         console.log('Sexta-feira');
//     break;
//     case 6:
//         console.log('Sábado');
//     break;
// }


//ATRBUIÇÃO VIA DESESTRUTURAÇÃO

//armazenando elementos de um array em variaveis 
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [primeiro, segundo, ...resto] = numeros; //resto armazena os demais elementos do array
// const [um, , tres, , cinco] = numeros; //armazenando valores, pulando os que nao serao utilizados
// //console.log(primeiro, segundo, ...resto);
// console.log(um, tres, cinco);

//com objetos
// const pessoa ={
//     nome: 'dhiulia',
//     sobrenome: 'antunes',
//     idade: 19,
//     endereco: {
//         rua: 'joao roso',
//         bairro: 'america'
//     }
// };
// const {nome, endereco} = pessoa;
// console.log(nome, endereco)

/* outras formas de acessar um dado de um objeto:
    console.log(pessoa.nome);
    console.log(pessoa['nome']);
*/


//FOR
// for(let i = 0; i < 5; i++){
//     console.log(`linha: ${i}`);
// }


//DOM
//arvores: document-> html -> body ...    parent(o que engloba) e child(o que está dentro de parent)


//FOR IN
// const frutas = ['pera', 'maca', 'uva']
// for (let i in frutas){
//     console.log(i);
// } //escrevendo o index das frutas do array


//FOR OF
// const frutas = ['pera', 'maca', 'uva']
// for (let fruta of frutas){
//     console.log(fruta)
// } escrevendo o valor do array


//WHILE E DO WHILE
// let i = 0;

// while(i <= 10){
//     console.log(i);
//     i++
// }

//exemplo gerando um numero aleatorio entre 0 e 50
// function random(min, max){
//     const r = Math.random() * (max - min) + min;
//     return Math.floor(r);
// }

// let rand = random(0, 50);
// console.log(rand);
// let rand = 10;

// do {
//     rand = random(0, 50);
//     console.log(rand);
// } while(rand !== 10); //chama a funcao ate rand ser diferente de 10


//BREAK e CONTINUE
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// for (let num of numeros){
//     if (num === 8 || num === 5) {
//         console.log("pulando resultados");
//         continue;
//     }; //pulando dois resultados do laço
//     if(num === 9) {
//         console.log("valor encontrado, laço interrompido");
//         break;
//      } //o laço será parado quando chegar no elemento especcificado pela condição 
//     console.log(num);
// }


//exercicio: funcao que recebe dois numeros e retorna o maior | arrow function 
// const max = (x, y) => x > y ? x : y;  //quando a funcao tem apenas uma linha, pode ser utilizada dessa forma e sem uso de return, 
// console.log(max(2, 3));                //que fica implicito


//TRY, CATCH, THROW
// try{
//     console.log(naoExiste)
// } catch (err) {
//     console.log("Variável não declarada")
// }

// function soma(x, y){
//     if (typeof x !== 'number' || typeof y !== 'number'){
//         throw ('os valores precisam ser numeros')
//     }
//     return x + y;
// }

// try{
//     console.log(soma('a', 3));
//     } catch(error){
//         console.log(error);
//     }

//uso do bloco finally para algo que sempre sera executado, independente se uma exceção for lançada ou capturada.


//SETINTERVAL E SETTIMEOUT
//setInterval serve para 'capturar' intervalos de tempo determinados
// function mostraHora(){
//     let data = new Date(); 
//     return data.toLocaleTimeString(`pt-BR`, {
//         hour12: false
//     }); //mostrando hora atual com segundo
// }

// const timer = setInterval(function (){ //utilizando funcao anonima
//     console.log(mostraHora())}, 1000) //setinterval recebera a hora e data atual e dara sequencia no intervalo ate 1000

// //setTimeOut definindo um fim para o intervalo
// setTimeout(function(){
//     clearInterval(timer);
// }, 10000 )


//FUNCOES
//formas de declarar

/**function falaOi(){
    console.log("oi")
}
falaOi()**/

/*const funcaoComoUmDado = function(){
    console.log("Possível a declaração de uma função como um dado, constante")
}
funcaoComoUmDado()**/

//funcoes de callback: definindo quando uma função será chamada após o termino de outra

//IIFE - Funçoes imediatas
//funcoes invocadas assim que sao criadas e sem tocar o escopo global 
// (function(){
//     console.log(123445)
// })()

// (function(idade){
//     const sobrenome = 'silva'

//     function nomeCompleto(nome){
//         return nome + ' ' + sobrenome
//     }

//     function imprimeNome(){
//         console.log(nomeCompleto('dhiulia'))
//     }

//     imprimeNome()
//     console.log(idade)
// })(19)
//nao ser afetada pelo o que ocorre no escopo global

