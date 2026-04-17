//EDUARDO MONTANHA SANTOS 3°TEC

//1) exiba a mensagem "Olá Mundo" no console
console.log("Olá Mundo");

//2) Crie uma variavel com seu nome e exiba o valor no console
let nome = "eduardo"
console.log(nome)

//3) Some dois números e exiba o resultado
console.log(3+1)

//4) Subtraia dois números e exiba o resultado
let subtrai = 10 - 3
console.log(subtrai)

//5) decubra o resto da divisão de um numero por outro
let divisao = 10%3
console.log(divisao)

//6) Crie uma variavel booleana e exiba o resultado
let booleano = false
console.log(booleano)

//7) verifique se um numero é maior que outro e exiba o resultado
let x = 1
let y = 3
if(x > y){
console.log("é maior!")
}
else{
    console.log("é menor!")
}

//8. Crie duas variaveis e exiba a concatenação
banana = "Aa";
maca = "Bb";
console.log(banana + maca);

//9. Descubra o tipo de uma variável
console.log(typeof(banana));

//10. Converta o número para string
let num1 = 30;
let num2 = String(num1);
console.log(typeof(num2));

//11. Number para string
let text1 = "19";
let text2 = Number(text1);
console.log(typeof(text2));

//12. Exiba no console.log números de 0 a 10
for(i = 0; i <= 10; i ++){
    console.log(i);
}

//13. Exiba apenas números pares até 20
for(i = 0; i <= 20; i += 2){
    console.log(i);
}

//14. Mostre no console números de 10 a 1
for(i = 10; i >= 1; i -= 1){
    console.log(i);
}

//15. Some números de 1 a 5
let somaLoop = 0;
for(i = 0; i <= 5; i ++){
    somaLoop += i;
}
console.log(somaLoop);

//16. Faça a tabuada do 3
for(i = 0; i <= 10; i ++){
    console.log(i * 3);
}

//17. Conte quantos números são maiores que cinco
let lista = [2, 6, 8, 1, 3];
let cont = 0;
for(i = 0; i < lista.length; i++){
    if(lista[i] > 5){
        cont += 1
        console.log(cont)
    }
}

//18. Percorra a string letra por letra
let palavra = "JFRS"
for(i = 0; i < palavra.length; i++){
    console.log(palavra[i])
}

//19. Pare um loop quando encontrar o número 7 de 0 a 10
for(i = 0; i <= 10; i ++){
    if(i = 7){
        console.log(i)
        i = 11
    }
}

//20) Crie uma função que exibe uma mensagem.
function mensagem(){
    console.log("OIOIOI")
}
mensagem()

//21) Crie uma função que multiplica dois números
function multiplica(){
    console.log(2*4)
}
multiplica()

//22. Crie uma função que verifica se é par ou impar
function verificar(num){
    return num % 2 === 0 ? "par" : "impar";
}
console.log(verificar(10))


//23. crie uma função ue retorne o dobro
function dobro(n){
    return n * 2;
}
console.log(dobro(5))

//24. Crie um função que some elementos de um array
function somaArray(arr){
    total = 0;
    for(let i = 0; i<arr.length; i++){
        total +=arr[i];
    }
    return total;
}

console.log(somaArray([2,5,6]));

//================ atividades IF =================//
//25. Verifique se o número 15 é positivo e exiba uma mensagem
let num = 15;
if(num > 0){
    console.log(`${num} é positivo`)
}

//26. Verifique se uma pessoa com 17 anos é maior de idade
let idade = 17
if(idade >= 18){
 console.log("esse nego ai é maior de idade")
}
else{
    console.log("esse nego é menor de idade")
}

//================= atividades array =================//
//27. crie um array com os numeros 10,20,30,40 e exiba todos
let array1 = [10, 20, 30, 40]
console.log(array1)

//28. crie um array com 5 frutas e exiba a primeira
let array2 = ["Limão","Maçã","Ameixa","Uva","Banana"]
console.log(array2[0])


//==============TERNÁRIO================//
//1. VERIFIQUE SE UM NUMERO É POSITIVO OU NÃO
let numero = 5;
let resultado = numero > 0 ? "Positivo" : "Negativo";
console.log(`O número ${numero} é ${resultado}`);

/*2. VERIFIQUE SE UMA PESSOA PODE VOTAR
 - SE SIM, RETORNE "PODE VOTAR", SE NÃO, "NÃO PODE VOTAR"*/
let idade1 = 11
let pode_ou_nao = idade1 >= 16 ? "pode votar!" : "não pode votar!"
console.log(`a pessoa com ${idade1} anos ${pode_ou_nao}`)

/*3. DESCUBRA SE UM NÚMERO É PAR OU IMPAR
 - SE PAR, RETORNE "PAR", SE IMPAR, RETORNE "IMPAR"*/
 let num3 = 12
 let verifica = num3%2 === 0 ? "par" : "impar"
 console.log(`o número ${num3} é ${verifica}`)

/*4. CRIE UMA VERIFICAÇÃO DE NIVEL DE ACESSO
 SE NIVEL FOR ADMIN, RETORNE "ACESSO TOTAL"
 CASO CONTRÁRIO, "ACESSO RESTRITO"*/
 let tipo = "Admin"
 let acesso = tipo === "Admin" ? "Total" : "Restrito"
 console.log(`o seu tipo é ${tipo}, então você tem acesso ${acesso}`)

/*EXERCÍCIO 5 (Médio-Fácil)
Aplique desconto em um produto.
- Se preço > 100, aplique 10% de desconto (multiplicar por 0.9)
- Caso contrário, mantenha o preço original*/
let preco = 99.0
let descontinho = preco > 100 ? console.log(`o preço é ${preco}, você ganhou desconto de 10%, o preço fica ${preco*0.9}`) :
console.log(`o preço é menor que 100, então você não tem desconto`)


/*EXERCÍCIO 6 (Médio-Fácil)
Classifique a situação do aluno baseado na média.
- Se nota >= 7, retorne "Aprovado"
- Caso contrário, "Reprovado"*/
let nota = 7;
let decisao = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(`A nota é ${nota}, o aluno foi ${decisao}`);


/*EXERCÍCIO 7 (Médio)
Verifique se um número é par E maior que 10.
- Se sim, retorne "Atende critérios"
- Se não, "Não atende"*/
let num4 = 8
let verifica1 = num4%2 === 0 & num4 > 10 ? "Atende os Critérios" : "Não atende os critérios"
console.log(`o número ${num4} ${verifica1}`)


/*EXERCÍCIO 8 (Médio)
Classifique o número em positivo, negativo ou zero.
- Se > 0: "Positivo"
- Se < 0: "Negativo"
- Se = 0: "Zero"*/
let num5 = 0;
let resultado1 = num5 > 0 ? "Positivo" : num5 < 0 ? "Negativo" : "Zero";
console.log(`O número ${num5} é ${resultado1}`);

/*EXERCÍCIO 9 (Médio)
Simule um login simples.
- Se usuario for "admin" E senha for "123", retorne "Login OK"
- Caso contrário, "Falha no login"*/
let usuario = "admin"
let senha = "123"
let login = usuario === "admin" & senha === "123" ? "Login OK" : "Falha no login"
console.log(`você colocou o usuario como: //${usuario}// e a senha como: //${senha}//... ${login}`)

/*EXERCÍCIO 10 (Médio)
Classifique a pessoa por idade:
- Menor que 12: "Criança"
- Entre 12 e 17: "Adolescente"
- Entre 18 e 59: "Adulto"
- 60 ou mais: "Idoso"*/
let idade2 = 90;
let verificadorIdade = idade2 < 12 ? "Criança" : 
idade2 <= 17 ? "Adolescente" : 
idade2 <= 59 ? "Adulto" : "Idoso";
console.log(`A pessoa com ${idade2} anos, é ${verificadorIdade}`);

// ==================== ATIVIDADES COM OBJETOS ====================

// 51: Crie um objeto pessoa com nome "Ana" e idade 25
let pessoa = {
    nome : "Ana",
    idade : 25
};
console.log(pessoa);


// 52: Acesse e exiba o nome do objeto {nome: "Carlos", cidade: "São Paulo"}
let pessoa1 = {
    nome: "Carlos",
    cidade: "São Paulo"
}
console.log(pessoa1.nome)


// 53: Adicione a propriedade "curso" ao objeto {nome: "Maria", idade: 20}
let estudante = {
    nome: "Maria",
    idade: 20
}
console.log("Antes", estudante)
estudante.curso = "Matemática"
console.log("Depois", estudante)


// 54: Altere a idade do objeto {nome: "João", idade: 18} para 19
let usuario1 = {
    nome: "João", 
    idade: 18
}
console.log("Antes", usuario1)
usuario1.idade = 19
console.log("Depois", usuario1)

// 55: Remova a propriedade "telefone" do objeto {nome: "Pedro", telefone: "99999-9999"}
let usuario2 = {
    nome: "Pedro", 
    telefone: "99999-9999"
}
console.log("Antes", usuario2)
delete usuario2.telefone
console.log("Depois", usuario2)

// 56: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}

// 57: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"

// 58: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]

// 59: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"

// 60: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos


