//exemplo sobre os padroes de versão JS
"use strict"
let num= 10;
console.log(num);

/*************************/
var x= 'valor 1'
let y='valor 2'
console.log(x,y);

var x="valor 3"
let k="valor 4"
console.log(x,y,k);

const B=12;
//B=B-10;
console.log(B);
/*comentario de mais de uma linha

String
*/

let s1,s2,s3;
s1='Bom dia'
s2="amigos"
s3=`Tudo Bem?`

let resp1= s1+" "+s2;
console.log(resp1);

let resp2=resp1+" "+s3;
console.log(resp2);

//template de string  ${}

let val1,val2,val3;
val1="Boa tarde";
val2='boa noite!!!';
val3=`Bom dia!!! \n ${val1}!!! \n ${val2}`;
console.log(val3);

let num1,num2;
num1=5;
num2=7;
console.log('resultado da soma de '+num1+" e "+num2+" = "+(num1+num2));
console.log(`Resultado da soma de ${num1} e ${num2} = ${(num1+num2)}`);

//caixa de alerta
alert("revisao de caixa de alerta");

//caixa de confirmação
//retorna true=ok,  false=cancelar

let confirmacao=confirm('Deseja realmente cancelar a ação?');
console.log(confirmacao);

//entrada de dados
//prompt-toda a entrada é string(texto)
let texto=prompt("Digite um texto qualquer: ");
console.log(texto);

//conversão de tipos
//inteiro=parseInt("10");
//flutuanteparseFloat("1.55");

num1=parseInt(prompt("Digite um número inteiro: "));
console.log(num1);
num2=parseFloat(prompt("digite um número float: "));
console.log(num2);
