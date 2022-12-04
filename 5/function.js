/* Faça um algoritmo que leia o nome de 10 livros que foram empilhados, e escreva
na ordem em que serão removidos da pilha (contrária à que foram digitados).
ORDEM DE LEITURA
0,1,2,3,4
4 ORDEM DE ESCRITA
4,3,2,1,0
*/
 
let arrayLeitura=['O que é Desenvolvimento de Sistemas.', 'O Jogador de Futebol.', 'O Desenvolvedor do Futuro.',
    'Aulas de Javascript.', 'Estudando React.', 'Como montar sua empresa.', 'Lógica de Programação.',
    'Como manter o foco.', 'Aulas de TypeScript.', 'Curso básico de informática.'
]

function leitura() { 
    let livros = arrayLeitura.map((livro, item) => `${item + 1} : ${livro}`);    
    document.querySelector('#livros').innerHTML = livros.join("<br>");
    livros(Show)
}
function invertido() {
    let livros = arrayLeitura.map((livro, item) => `${item + 1} : ${livro}`).reverse(); 
    document.querySelector('#invertido').innerHTML = livros.join("<br>");
}
    



