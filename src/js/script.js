// DECLARAÇÕES E VARIAVEIS
//VAR, LET E CONST
var nome= "Fiap";
console.log(nome);
var nome="Dev";
console.log(nome);

if(true){
   var avatar="Fiapinho";
}
console.log(avatar);

//EXEMPLOS
let exemplo1 = "Olá Dev-let";
console.log(exemplo1);

const exemplo2 = "Olá Dev-const";
console.log(exemplo2);

let exemplo3 = 20;
console.log( exemplo3);

let exemplo4 = true;
console.log( exemplo4);

let exemplo5 = {nome:"FIAP"};
console.log(exemplo5);

let exemplo6 = ["PHP", "Java" , "HTML"];
console.log(exemplo6);

//valor indefinido
let exemplo7;
console.log(exemplo7);

//valor nulo
let exemplo8 = null;
console.log(exemplo8);

//OPERADORES ARITMÉTICOS
const valor1 = 10;
const valor2 = 20;
console.log(valor1+valor2);
console.log(valor1-valor2);
console.log(valor1*valor2);
console.log(valor1/valor2);

//OPERADORES LÓGICOS
const valor3 = 20;
const valor4 = 40;
console.log(valor3 > valor4);
console.log(valor3 < valor4);
console.log(valor3 > valor4 && valor4 < 0);
console.log(valor3 == valor4 || valor4 > 10);

//OPERADORES DE COMPARAÇÃO
console.log(valor3 == valor4);
console.log(valor3 === valor4);

//Utilizando as variáveis p (preço do produto) e  v(valor do desconto), crie uma nova variável 
//chamada precoFinal que subtraia o desconto do preço e exiba o resultado.	

const p = 10;
const v = 5;
const pf = p-v;
console.log(pf);

//ESTRUTURA CONDICIONAL
//1.if e else
if(true){
   console.log("verdadeiro")
}

let nome1= "fiap";
if(nome1=="fiap"){
   console.log("Nome correto!")
}
if(nome1=="fiap"){
   console.log("Nome correto!")
}else{
   console.log("nome errado!")
}

//if encadeado elif
let idade = 13;
if (idade <=13){
   console.log("uma criança")
}else if (idade > 13 && idade <18) {
   console.log("um adolescente")
}else{
   console.log("um adulto")
}

//switch case

let times ="Corintia";

switch(times){
   case "Corintia":
      console.log("Um time ruim pa cara###")
      break;
   case "Palmeiras":
      console.log("Mlr do BRasil!")
      break;
   default:
      console.log("nenhuma das opções(santos)")
}

//ternário
let num = 100;
let resultado = num ==100? "certo":"errado";
console.log(resultado)