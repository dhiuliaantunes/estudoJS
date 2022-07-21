const paragrafos = document.querySelector('.paragrafos'); //retorna apenas um elemento, a classe paragrafos
const ps = paragrafos.querySelectorAll(`p`); //selecionara todos os 'p' dentro da classe | utilizando crase ao inves de aspas simples

const estilos = getComputedStyle(document.body);
const backgroundColorBody = estilos.backgroundColor;
console.log(backgroundColorBody)

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody; //tranformando a cor de fundo dos paragrafos na cor de fundo da pagina
}
