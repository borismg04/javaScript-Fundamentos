/* Objetos */ 
// Un objeto es una colección de propiedades y métodos.
// Un objeto es una instancia de una clase.

//Forma 1 (mas recomendable) evita escribir las variables

const productos2 = {
    nombre: 'Tablet',
    precio: 1000,
    disponible: true,
}
console.log(productos2);
console.table(productos2);

console.log("Nombre del Objeto = ",productos2.nombre);
console.log("Precio del Objeto = ",productos2.precio);
console.log("Disponible del Objeto = ",productos2.disponible);

// Destructuración de objetos (ES6 Destructuring)
console.log("<---------------Destrugturing----------------->");
const { nombre,precio,disponible }=productos2;
console.log("Nombre del Objeto = ",nombre);
console.log("Precio del Objeto = ",precio);
console.log("Disponible del Objeto = ",disponible);

//Object Literal Enhavement (ES6 Object Literal Enhancement)
console.log("<---------------Object Literal Enhancement----------------->");
//Esta herramienta permite agregar propiedades a un objeto sin necesidad de crear una nueva variable
const autenticado = true;
const usuario = 'admin';

const nuevoProducto = {
  //Si son iguales se peuden dejar solo una y tienen que tener el mismo nombre
  autenticado,//autenticado: autenticado,
  usuario//usuario: usuario,
}

console.table(nuevoProducto);

//Ejemplo de Object Literal Enhancement

// const nombre ='Tablet';
// const precio = 1000;
// const disponible = true;

// const productos = {
//     nombre,
//     precio,
//     disponible,
// }
// console.log(productos);
// console.table(productos);
