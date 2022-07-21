//criando uma calculadora somente para exercitar factory function
function CriaCalculadora(){

  return{
    display: document.querySelector('.display'),
    //querySelector trará o primeiro elemento de acordo com a expressão que você passar lá dentro

    inicia(){
      alert('Calculadora iniciada');
    },

    cliqueBotoes(){
      document.addEventListener('click', function(e) { //capturando o evento (click)
      const el = e.target; //const que recebera o evento

      if(el.classList.contains('btn-num')){ //se o evento for da classe btn-num, a função será invocada
        this.btnParaDisplay();
      }
      }.bind(this)); //definindo que o objeto this utilizado sera a calculadora,
    },              // se nao o js reconheceria o document da linha 12 como this 

    btnParaDisplay(){

    }
  }; //objeto retornado
}

const calculadora = CriaCalculadora();
calculadora.inicia();