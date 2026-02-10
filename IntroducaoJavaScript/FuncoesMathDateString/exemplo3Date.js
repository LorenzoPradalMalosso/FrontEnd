var agora = new Date;

var dia = agora.getDate();
var mes = agora.getMonth();
var ano = agora.getFullYear();

switch (mes) {
    case 0:
        mes = "Janeiro"
        break;
    case 1:
        mes = "Fevereiro"
        break;
    case 2:
        mes = "Março"
        break;
    case 3:
        mes = "Abril";
        break;
    case 4:
        mes = "Maio";
        break;
    case 5:
        mes = "Junho";
        break;
    case 6:
        mes = "Julho";
        break;
    case 7:
        mes = "Agosto";
        break;
    case 8:
        mes = "Setembro";
        break;
    case 9:
        mes = "Outubro";
        break;
    case 10:
        mes = "Novembro";
        break
    case 11:
        mes = "Dezembro";
        break;
    default:
        break;
}

console.log(`${dia} de ${mes} de ${ano}`);

//funções de  Data e Hora

//imprime a data atual
console.log(agora);

//imprime a hora em formato de string
console.log(agora.toDateString());

//imprime a data em formato local
console.log(agora.toLocaleDateString());

//getters
console.log(agora.getFullYear());

//operadores de Data e hora

let data1 = new Date("2026-02-10");
let data2 = new Date("2026-12-18");

let diferenca = data2-data1;

//calcular os dias para a formatura
console.log(diferenca/1000*60*60*24);