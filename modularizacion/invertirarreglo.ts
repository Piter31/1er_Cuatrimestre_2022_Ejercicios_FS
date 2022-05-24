// let dimensionArreglo: number = 6;
let v1: number[] = [1, 2, 3, 4, 5];

function mostrarVectorInvertido(vector: number[]) {
	for (let indice: number = vector.length - 1; indice >= 0; indice--) {
		console.log(vector[indice]);
	}
}

mostrarVectorInvertido(v1);
