let lista = [["1", "2", "3"], ["um", "dois", "tres"], [1, 2, 3]];
for (let i = 0; i < lista.length; i++) {
    for (let j = 0; j < lista[i].length; j++) {
        console.log(lista[i][j]);
    }
}

let numeros = [10, 20, 30];

let numerosTriplo = numeros.map(x => x * 3)
console.log(numerosTriplo);

let numerosMenor21 = numeros.filter(x => x <= 20);
console.log(numerosMenor21);

let numerosSoma = numeros.reduce((x, y) => x + y);
console.log(numerosSoma);

let numerosInvertido = numeros.reverse();
console.log(numerosInvertido);