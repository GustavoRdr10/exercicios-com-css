/* Elabore um algoritmo que lê as notas de 10 alunos, e em seguida apresenta a
média das notas informadas. */

function media() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var nota4 = parseFloat(document.getElementById("nota4").value);
    var nota5 = parseFloat(document.getElementById("nota5").value);
    var nota6 = parseFloat(document.getElementById("nota6").value);
    var nota7 = parseFloat(document.getElementById("nota7").value);
    var nota8 = parseFloat(document.getElementById("nota8").value);
    var nota9 = parseFloat(document.getElementById("nota9").value);
    var nota10 = parseFloat(document.getElementById("nota10").value);
    var media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9 + nota10) / 10;  
    alert("Sua média é: "+media);
}
function limpaForm(){
    document.getElementById('form1').reset();
} 