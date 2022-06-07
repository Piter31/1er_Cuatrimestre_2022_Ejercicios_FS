//let num: number [] = new Array [6];

let num: number;
let numeros: number[] = new Array(5);
//let indice: number;

for (indice = 0; indice < 5; indice++) {
  num = Number(prompt("Ingresar 5 numero diferentes:" + indice));
  numeros[indice] = num;
  console.log("Numero: " + num);
}
