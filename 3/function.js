/* Elabore um algoritmo que lê o tempo de corrida de 30 corredores (em segundos),
em seguida ele apresenta o tempo do primeiro e do último colocados, seguido da sua
posição. */


const tempoCorridaSegundos = [ 30, 127, 12, 100, 300, 110, 20, 28, 10, 39, 31, 48, 42, 55, 44, 12,
34, 77, 80, 93, 51, 67, 49, 109, 78, 34, 37, 36, 90, 98];

function tempoCorrida() {
    alert(`O tempo da corrida em segundos foi: ${tempoCorridaSegundos}`);
}

function primeiroColocado() {    
    const maior = Math.max.apply(null, tempoCorridaSegundos);
    const posicaoArray = tempoCorridaSegundos.indexOf(maior)
    alert(`O seu tempo foi: ${maior} segundos. Sua posição é: ${posicaoArray} colocado`);
}

function ultimoColocado() {
    const maior = Math.min.apply(null, tempoCorridaSegundos);
    const posicaoArray = tempoCorridaSegundos.indexOf(maior)
    alert(`O seu tempo foi: ${maior} segundos. Sua posição é: ${posicaoArray} colocado`);
}


