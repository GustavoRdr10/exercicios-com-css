/* Elabore um programa para ler valores para dois vetores, a[10] e b[10]. Transfira, a
seguir, os valores lidos para um vetor c[20] e os escreva de maneira ordenada
crescente. */

const vetorA = [33,22,34,78,90,21,39,56,38,1];
const vetorB = [28,12,10,3,5,52,17,95,19,30];
const vetorCrescente = vetorA.concat(vetorB);

 
function numerosA() {
    document.getElementById('vetorA').innerHTML=vetorA.map(item => `<li>${item}</li>`).join('');
}

function numerosB() {
    document.getElementById('vetorB').innerHTML=vetorB.map(item => `<li>${item}</li>`).join('');
}

function numerosCrescente() {
    
    vetorCrescente.sort((a, b) => {
        if (a < b) return -1;
    })
    // console.log(vetorCrescente)
    document.getElementById('vetorCrescente').innerHTML=vetorCrescente.map(item => `<li>${item}</li>`).join('');
}