// Questão 1: Verificar se uma variável é do tipo String
// Conceito: Utilizamos o operador typeof para verificar o tipo de uma variável.
// Exemplo:
function isString(str) {
 return typeof str === 'string';
}

console.log(isString('w3resource')); // true
console.log(isString([1, 2, 4, 0])); // false
