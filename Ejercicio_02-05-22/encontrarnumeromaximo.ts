let numImput: number = Number(prompt("Ingrese numero"));
let mayor = numImput;

while (numImput != 0) {
  numImput = Number(prompt("Ingrese Numero"));
  if (mayor < numImput) {
    mayor = numImput;
  }
}
console.log("El numero mayor es: " + mayor);
