class heroi{
   constructor(nome, classe){
      this.nome = nome;
      this.classe = classe;
   };
};

function criarHeroi(){
//capturando oqueo usuario digitou/selecionou na tela
   const nomeDigitado = document.getElementById('nomeInput').value;
   const classeSelecionada = document.getElementById('classeSelect').value;
//crianddo o objeo dinamicamente com os valores dos campos

   const novoHeroi = new heroi(nomeDigitado, classeSelecionada);


};

































