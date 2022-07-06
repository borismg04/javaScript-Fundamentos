// Condicionales || (OR) && (AND)

const saldo = 600;
const pagar = 200;
const tarjeta = true;

/*
  || (OR) -> Si una de las condiciones es verdadera, se ejecuta el código. "Al menos una debe cumplirse"
  && (AND) -> Si todas las condiciones son verdaderas, se ejecuta el código. "Todas deben cumplirse"
*/

//Ejemplo 1 
// if (saldo > pagar ) {
//   console.log("Puedes pagar con tu saldo");
// }else if (tarjeta) {
//   console.log("Puedes pagar con tu tarjeta");
// }
// else {
//   console.log("No puedes pagar con tu saldo");
// }

//Ejemplo 2 
// || (OR) aqui se puede usar una condicion otra condicion si no se cumple la primera se ejecuta la segunda
// if(saldo > pagar || tarjeta){
//   console.log("Puedes pagar con tu saldo o tu tarjeta");
// }else{
//   console.log("No puedes pagar con tu saldo");
// }

// && (AND) aqui se tienen que cumplir las dos condiciones para que se ejecute la sentencia
if(saldo > pagar && tarjeta){
  console.log("Puedes pagar con tu saldo o tu tarjeta");
}else{
  console.log("No puedes pagar con tu saldo");
}
