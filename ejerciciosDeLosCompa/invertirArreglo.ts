//

function mostrarVectorInvertido(v: number[], cantidad: number) {
  let vectorInvertido: number[] = [];
  for (let i = cantidad - 1; i >= 0; i--) {
    vectorInvertido.push(v[i]);
  }
  console.log(`El arreglo invertido es ${vectorInvertido}`);
}
mostrarVectorInvertido();
