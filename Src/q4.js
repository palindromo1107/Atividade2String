// Questão 4: Recortar um número especificado de caracteres de uma String
// Conceito: Utilizamos o método slice() para recortar a string.
// Exemplo:
function initCut(str, num) {
 return str.slice(0, num);
}

console.log(initCut("Round Robin", 4)); // "Roun"