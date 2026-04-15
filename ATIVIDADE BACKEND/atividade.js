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






















