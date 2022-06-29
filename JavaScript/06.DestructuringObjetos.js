// Objetos Destructuring con 2 o mas Objetos

const producto= {
  nombre: 'Tablet',
  precio: 1000,
  disponible: true,
}

const cliente = {
  nombre: 'Boris',
  premium: true,
}

const { nombre , precio , disponible } = producto;
const { nombre: nombreCliente , premium } = cliente;

console.log(nombre , precio , disponible);
console.log(nombreCliente , premium);