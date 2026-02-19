const imagem = document.getElementById('img');
const botoes = document.getElementById('buttons');

let indiceCor = 0;
let idIntervalo = null;

//controla o indice das cores (0,1,2 e volta pra 0)//

const proximoIndice = ()=>{
    indiceCor = indiceCor < 2 ? ++indiceCor : 0;
    //ele usa o "?" para perguntar se o valor é menor(<) que 2, se for, ele incrementa, se for falso, retorna 0.
}

//objeto responsável por ligar cada cor;
const ligar = {
    'red': ()=> imagem.src = './img/gato-bravo.png',
    'yellow':()=> imagem.src = './img/gato-feliz.png',
    'green':()=> imagem.src = './img/gato-malvado.jpg',
    'automatic':()=> idIntervalo = setInterval(mudarCor, 1500)
}

//muda as cores automaticamente

const mudarCor = () => {
    const cores = ['green', 'yellow', 'red'];
    const cor = cores [indiceCor]; //informa a variavel "cores" que usa a variavel "indiceCor" para executar afinal não se pode por números ali, é nescessário uma variavel
    ligar[cor]();
    proximoIndice();

}

//modo automático

const pararAutomatico = () => {
    clearInterval(idIntervalo);
}

//evento de clique
const controlarSemaforo = (event) =>{
    pararAutomatico();
    ligar[event.target.id]();
}

botoes.addEventListener('click', controlarSemaforo);
