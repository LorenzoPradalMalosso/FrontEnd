// Tipos de operadores

// Operadores aritméticos (+ - * / %)
var a = 10;
var b = 3;
var c;

//soma
c = a + b;
console.log("Soma: " + c);

//subtração
c =  a - b;
console.log("Subtração: " + c);

//multiplicação
c = a * b;
console.log("Multiplicação: " + c);

//divisão
c = a / b;
console.log("Divisão: " + c);

//resto da divisão
c = a % b;
console.log("Resto: " + c);

//Operadores Relacionais (> < >= <= == === != !===)
var a = 10;
var b = 20;
var c = "20";

console.log("Relacionais: " + (a>b)); //false
//o que importa
console.log("Igualdade Simples: " + (b==c)); //true
console.log("Igualdade estrita: " + (b===c)); //false

//Operadores Lógicos ( && - E , || - OU , ! - Não)
var nota1 = 5;
var nota2 = 8;

console.log("Aprovação: " + nota1 > 7 && nota2 > 7); //false
console.log("Aprovação: " + nota1 > 7 || nota2 > 7); //true
console.log("Negação: " + !true); //false