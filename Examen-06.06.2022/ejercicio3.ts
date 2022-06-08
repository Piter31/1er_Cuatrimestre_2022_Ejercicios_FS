//Detecta cuales son los errores en la sig. Funcion y describe como los solucionarias.

//** la funcion multiplica los numeros ingresados por el usuario que se encuentran entre los valores min y max y devuelve el resultado de la multiplicacion */

function multiplicarEntreNumeros(
  min: number,
  max: number,
  cantNum: number
): number {
  let resultado: number = 0;
  let numIng: numIng = 0;
  let i: numIng = 1;
  while (i <= cantNum) {
    numIng = Number(prompt("Ingrese un numero: "));
    if (numIng >= min && numIng <= max) {
      resultado = numIng;
    }
  }
  return cantNum;
}
