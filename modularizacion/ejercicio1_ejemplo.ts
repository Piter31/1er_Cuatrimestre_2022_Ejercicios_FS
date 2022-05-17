//1er ejemplo

let mensajeGlobal: string = "Hola Global!!";

function ambitoVariable() {
  let mensajeLocal: string;
  mensajeLocal = "Hola Mundo!!";
  console.log(mensajeLocal);
}
ambitoVariable();
console.log(mensajeGlobal);
