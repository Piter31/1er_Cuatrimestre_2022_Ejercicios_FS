//Realizar una funcion que devuelva el menor valor de un arreglo de valores numericos.
//El arreglo estara cargado con datos aleatorios y con dimension ingresada por el usuario.

let nuevo: number = Number(prompt("Ingresar un numero entero:"));
let numeros: number[] = new Array(nuevo);
let menor: number = 0;

function menorValor(numeros: number) {
  return Math.floor(Math.random() * numeros);
}

//console.log("Tamaño del arreglo: " + nuevo);
for (let i: number = 1; i < nuevo; i++) {
  numeros[i] = menorValor(nuevo);
  //console.log("numero: "+ numeros[i]);
  if (menor < numeros[i]) {
    menor = numeros[i];
  }
}
console.log("El menor valor de todos los elementos es: " + menor);
