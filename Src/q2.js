// Questão 2: Verificar se uma String está em branco ou vazia
// Conceito: Utilizamos o método trim() para remover espaços em branco e verificar o comprimento da string.
// Exemplo:
function isEmpty(str) {
 return str.trim().length === 0;
}

console.log(isEmpty('')); // true
console.log(isEmpty('abc')); // false