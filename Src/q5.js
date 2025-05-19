// Questão 5: Converter uma string em formato abreviado
// Conceito: Utilizamos o método split() e charAt() para criar a abreviação.
// Exemplo:
function abbrevName(str) {
 let names = str.split(' ');
 return `${names[0]} ${names[1].charAt(0).toUpperCase()}.`;
}

console.log(abbrevName("Robin Hood")); // "Robin H."