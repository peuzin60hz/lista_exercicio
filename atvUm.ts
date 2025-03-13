/* (5 pontos)
1 - Faça um programa que calcule e apresente o valor do volume de uma lata, sabendo que PI é um valor constante de 3.14159, o programa deve pedir os valores de RAIO e ALTURA, utilize a fórmula VOLUME = PI * RAIO² *ALTURA.
Nome: Pedro Elias
*/

console.log(`CALCULADORA DE VOLUME`);

let teclado = require(`prompt-sync`)();

let high : number = teclado(`Altura: `)
let lengt : number = teclado(`Comprimento: `)
let pi : number = (3.14159);
let raio : number = teclado(`Raio: `)

let volume : number = 2 * pi * raio * raio * high;

console.log(`O volume da lata é ${volume}!`);