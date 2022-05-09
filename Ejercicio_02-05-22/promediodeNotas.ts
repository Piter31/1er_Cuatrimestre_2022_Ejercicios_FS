let nota, suma, promedio: number;

suma = 0;
for (let contador: number = 1; contador <= 10; contador++) {
  nota = Number(prompt("Ingrese una nota: "));
  suma += nota;
}
promedio = suma / 10;
console.log("El promedio de las notas es: " + promedio);
