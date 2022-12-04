/* Escrever um algoritmo que lê a temperatura de 25 pessoas e as escreve,
colocando um destaque **temp[i]** em todas que forem acima de 38.*/

const temperatura = [31, 32, 38, 37, 25, 20, 39, 36, 40, 22, 24, 41, 44, 33, 20, 23, 34, 26, 30, 13, 43, 12, 28, 13, 10];

function temperaturaAlta() {
    var maior = temperatura.filter((alta) =>{
        return alta >= 38;
    })
    alert(`Temperaturas com febre: ${maior}`);
}



