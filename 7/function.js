/* Elabore um programa que leia 50 valores para um vetor A e o escreva. Pesquise,
a seguir, o vetor e:
a) Encontre e escreva o maior valor e sua posição;
b) Encontre e escreva o menor valor e sua posição;
c) Calcule e escreva a média aritmética dos valores lidos;
d) Escreva quantos números são pares;
e) Escreva quantos números são ímpares;
8. Escrever */
const vetorA = [33, 25, 38, 87, 52, 57, 2, 99, 5, 8, 100, 105, 3, 200, 205, 10, 8, 13, 19, 22, 307, 4, 201, 301, 400, 22,
    45, 55, 69, 80, 23, 38, 35, 87, 800, 2, 380, 45, 22, 39, 250, 24, 48, 30, 25, 99, 100, 102, 97, 1];

function maiorValor() {
    let maior = Math.max.apply(null, vetorA);
    let posicao = vetorA.indexOf(maior);
    alert(`O valor maior é: ${maior}. Sua posição é: ${posicao}`);
}
function menorValor() {
    let menor = Math.min.apply(null, vetorA)
    let posicao = vetorA.indexOf(menor);
    alert(`O valor menor é: ${menor}. Sua posição é: ${posicao}`);
}
function mediaAritmetica() {
    let soma = 0;
    for (var i = 0; i < vetorA.length; i++) {
        let numero = vetorA[i];
        soma = soma + numero;
    }
    let media = soma / vetorA.length
    alert("A média aritmética é: " + media);
}
function numerosPares() {
    let par = [];
    for (pares of vetorA) {
        if (pares % 2 === 0) {
            par.push(pares);            
        }        
    }  
    quantidade = par.length; 
    alert(`A quantidade de números pares é: ${quantidade}`);
}
function numerosImpares() {
    let impar = [];
    for (impares of vetorA) {
        if (impares % 2 === 1) {
            impar.push(impares);            
        }        
    } 
    quantidade = impar.length; 
    alert(`A quantidade de números impares é: ${quantidade}`);
}





