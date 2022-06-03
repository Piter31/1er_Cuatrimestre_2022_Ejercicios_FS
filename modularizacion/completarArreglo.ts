//completar arreglo - numeros al azar

let arregloCompletar: number[] = new Array(10);
let indice: number;

function Azar(tope: number) {
  return Math.floor(Math.random() * tope);
}

for (indice = 0; indice < 10; indice++) {
  arregloCompletar[indice] = Azar(100);
}

for (indice = 0; indice < 10; indice++) {
  console.log(
    `El número en la posición ${indice} es: ${arregloCompletar[indice]}`
  );
}
