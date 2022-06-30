// Funciones = Function Declaration

// function sumar() {
//   console.log(2+2);//4
// }
// sumar();


// function sumar(num1,num2) {
//   console.log(num1+num2);
// }
// sumar(2,2);
// sumar(20,60);
// sumar(100,200);

//Retornando un Array
console.log("<-----------Retornando un Array ---------->");
function sumar(num1,num2) {
  return [num1+num2,"Hola Mundo"];
}

const [resultado,holaMundo] = sumar(100,250);
console.log(resultado);
console.log(holaMundo);

console.log("<-----------Retornando un Objeto ---------->");
//Retornando un Objeto
function sumar1(num1,num2) {
  return {
    resultado1: num1+num2,
    mensaje: "Hola Mundo"
  }
}

const {resultado1,mensaje} = sumar1(100,250);
console.log(resultado1);
console.log(mensaje);