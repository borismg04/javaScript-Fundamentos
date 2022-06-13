/* Variables -var let

  var = definimos una variable con local scope, también nos permite utilizar un comportamiento llamado hoisting, sin generar ningún error.

//TODO: Por que no usar VAR?

  var = tiene algunas funciones ocultas que pueden dañar nuestro código sin que lo sepamos, 
    dicha palabra nos permite usar variables… ¡sin antes ser declarada!, 
    esto sucede gracias a un proceso llamado hoisting, 
    no nos pongamos técnicos, esto lo que hará es declarar la variable por ti.

  let = Definimos variable con block scope, las variables declaradas de esta manera nos genera un error de referencia cuando intentamos utilizar hoisting.
  
  let = Si una variable es declarada con let en el ámbito global o en el de una función,
  la variable pertenecerá al ámbito global o al ámbito de la función respectivamente, 
  de forma similar a como ocurría con var.
  
*/


let cliente = "Boris";
let precioDescuento = 220; // En javaScript siempre se utiliza camelCase

//Reasignar valor
cliente = 20;
cliente = true;

console.log("Cliente: " + cliente);
console.log("Precio con descuento: " + precioDescuento);
console.log(precioDescuento);

// Pueden iniciar sin un valor 

let precio;

precio = 100;

console.log("Precio: " + precio);