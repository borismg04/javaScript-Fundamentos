// Condicionales Ternarios

const autenticado = true;

// condiciion que se tiene que cumplir para que se ejecute la sentencia 
autenticado ? 
// ? -> si se cumple la condicion se ejecuta la sentencia 
  console.log("Usuario autenticado") : 
// : -> si no se cumple la condicion se ejecuta la sentencia   
  console.log("Usuario NO autenticado");

//Doble ternario

const saldo = 600;
const pagar = 200;
const tarjeta = true;

saldo > pagar ?
  console.log("Puedes pagar con tu saldo") :
  tarjeta ?
    console.log("Puedes pagar con tu tarjeta") :
    console.log("No puedes pagar con tu saldo");