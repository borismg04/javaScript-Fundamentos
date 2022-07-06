// Funciones - Function Expression

// function sumar(num1, num2) {
//   console.log(num1 + num2);
// }

//Esta es la forma de definir una funcion
const sumar = function( num1=0, num2=0 ) {
  return num1 + num2 ;
}

const resultado = sumar(30);
console.log('Resultado:', resultado)
