/* (5 pontos)
2 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter o valor de x.
Nome Aluno: Pedro Elias
*/

let teclado = require('prompt-sync')();

let x: number = parseInt(teclado(`Digite o primeiro número: `));
let y: number = parseInt(teclado(`Digite o segundo número: `));

console.log(`Valores digitados: x = ${x}, y = ${y}`);

[x, y] = [y, x];

console.log(`Valores trocados: x = ${x}, y = ${y}`);
