const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas'); //capturando os botoes

function criaLi() {
  const li = document.createElement('li');
  return li; 
} //criando linha de cada item

inputTarefa.addEventListener('keypress', function(e) { //criando tarefa com evento de tecla pressionada (enter)
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = ''; //definindo que valor dentro do input sera vazio 
  inputTarefa.focus(); //ao chamar o limpaInput, o input estara em foco 
}

function criaBotaoApagar(li) {
  li.innerText += ' '; //recebe a linha que sera apagada e define que seu valor sera vazio
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar'); //setando a classe do botao apagar, que sera 'apagar'
  botaoApagar.setAttribute('title', 'Apagar esta tarefa'); //setando o titulo do botao, sera 'apagar esta tarefa'
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi(); //chamando a funcao que cria a linha de item
  li.innerText = textoInput; //definindo que o texto sera adicionado nesse elemento li
  tarefas.appendChild(li);  //acrescentando o elemento li definido no elemento 'pai' tarefas
  limpaInput(); //chamando funcao que esvazia o formulario
  criaBotaoApagar(li); //chamando a funcao responsavel por apagar uma li
  salvarTarefas(); //chamando funcao responsavel por salvar tarefas
} 

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
}); //ao botao ser clicado, chamara a funcao criaTarefa, passsando o texto informado como parametro

document.addEventListener('click', function(e) {
  const el = e.target; //recebendo o valor de um evento

  if (el.classList.contains('apagar')) {  //retorna o elemento da lista el que contem a funcao apagar
    el.parentElement.remove(); //removendo el
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li'); //selecionando a li
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas); //conversao para formato Json

  for(let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
    console.log(tarefa)
  }
}
adicionaTarefasSalvas();
