// Questão 3: Dividir uma string em um array de palavras
// Conceito: Utilizamos o método split() para dividir a string em um array de palavras.
// Exemplo:
function toArray(str) {
 return str.split(' ');
}

console.log(toArray("Round Robin")); // ["Round", "Robin"]