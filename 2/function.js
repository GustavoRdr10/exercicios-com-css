/* Elabore um algoritmo que lê 20 números aleatórios, e em seguida apresenta
somente os pares. */

function numerosAleatorios() {
    alert(arrayNumeros);
}
function numerosPares() {
    alert(arrayPares);
}
Array.prototype.retornaPares = function() {
    var numerosPares = [];
    this.forEach(numero => {
        if (numero % 2 === 0 )
            numerosPares.push(numero);
    })
    return numerosPares;
}
var arrayNumeros = Object.keys(new Array(20).fill(null)).map(Number);
var arrayPares = arrayNumeros.retornaPares();
