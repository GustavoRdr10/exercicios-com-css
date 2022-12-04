/*Elabore um programa que lê valores inteiros para um vetor de 30 posições e o
escreve. Troque, a seguir, somente os números ímpares deste vetor pelo valor “zero”.
Escreva o vetor resultante. Apresente lado a lado os valores do vetor original, e do vetor
resultante.
2 2
3 0
5 0
4 4
8 8 */


let arrayNumeros = Object.keys(new Array(30).fill(null)).map(Number);

function numerosInteiros() {
    document.getElementById('lista').innerHTML= arrayNumeros.map(item => `<li>${item}</li>`).join('');
}
function resultante() {
    let copiaArray = [];
    arrayNumeros.forEach(numero => {
        if (numero % 2 != 0) {
            copiaArray.push(0);
        } else {
            copiaArray.push(numero);
        }
        
    })
    copiaArray.forEach(numero => {
        document.getElementById('numeroZero').innerHTML= copiaArray.map(item => `<li>${item}</li>`).join('');
    })
    
}










