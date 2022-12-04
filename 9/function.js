/* Elabore um programa que lê 20 notas de uma turma, e armazene em um vetor de
números reais. Crie um vetor de cadeia, e armazene a menção equivalente a cada nota,
na mesma posição. Se a nota for menor que 7, a menção é NA; se a nota for menor que
8, a menção é A; se a nota for maior que 8 a menção é AP. Apresente os dois vetores
lado a lado.
10 AP
9 AP
5 NA
7,5 A */

const notas = [10, 9, 7.5, 1, 5, 6, 6.3, 9.5, 5.2, 3.1, 2.2, 9.3, 4.5, 8, 7.8, 9.1, 9.6, 8.4, 1.3, 9.8];

function notasOriginais() {
    document.getElementById('notaOriginal').innerHTML=notas.map(item => `<li>${item}</li>`).join('');
}
function notasNA() {
    let copiaNotas = [];
    notas.forEach(nota => {
        if(nota <= 7) {
            copiaNotas.push("NA");
        } else {
            copiaNotas.push("-")
        } 
    })
    document.getElementById('notaNA').innerHTML=copiaNotas.map(item => `<li>${item}</li>`).join('');
}
function notasA() {
    let copiaNotas = [];
    notas.forEach(nota => {
        if(nota >= 7 && nota <8) {
            copiaNotas.push("A");
        } else {
            copiaNotas.push("-")
        }        
    })
    document.getElementById('notaA').innerHTML=copiaNotas.map(item => `<li>${item}</li>`).join('');
}
function notasAP() {
    let copiaNotas = [];
    notas.forEach(nota => {
        if(nota >= 8 ) {
            copiaNotas.push("AP");
        } else {
            copiaNotas.push("-")
        }       
    })
    document.getElementById('notaAP').innerHTML=copiaNotas.map(item => `<li>${item}</li>`).join('');
}
