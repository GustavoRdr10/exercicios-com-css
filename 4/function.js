/* Elabore um algoritmo que lê valores para um vetor de 17 posições, e armazena
em um segundo vetor somente os números primos entre os lidos. Escreva, a seguir, o
vetor original, e o vetor de números primos. */

function numerosAleatorios() {
   alert(arrayNumeros);
}
function numerosPrimos() {
   alert(arrayPrimos);
}
var arrayNumeros = Object.keys(new Array(17).fill(null)).map(Number);
var arrayPrimos = [];
arrayNumeros.forEach((num) => {
   var numeros = 0;
   for (var numeroPrimo = 1; numeroPrimo <= num; numeroPrimo++) {
      if (num % numeroPrimo == 0) {
         numeros++;
      }   
   }
if (numeros === 2) {
   arrayPrimos.push(num);
}
}); 
(arrayPrimos);










