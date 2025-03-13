/* Nome: Pedro Elias */

let teclado = require(`prompt-sync`)();

let x : number = parseInt(teclado(`Digite um número: `));
let y : number = parseInt(teclado(`Digite um número: `));
let z : number = parseInt(teclado(`Digite um número: `));

if (x > y) {
[x, y] = [y, x];
}
if (y > z) {
  [y, z = z, y];
}
if (x > y) {
  [x, y] = [y, x]
}

console.log(`Números em ordem crescente: ${x}, ${y} e ${z}`);