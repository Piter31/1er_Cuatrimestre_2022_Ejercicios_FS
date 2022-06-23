// //

// console.clear();
// let i: number = 42;

//fibonacci(0) == 0
//fibonacci(1) == 1
function calcularFibonacciRec(n: number): number {
  let resultado: number = 0;
  if (n > 1) {
    resultado = calcularFibonacciRec(n - 1) + calcularFibonacciRec(n - 2);
  } else {
    resultado = n;
  }
  return resultado;
}

console.log(calcularFibonacciRec(3));
