// Manipulacion de Objetos 

const producto= {
  nombre: 'Tablet',
  precio: 1000,
  disponible: true,
}

//Para no modificar el objeto original
// Object.freeze(producto); Freeze nos permite bloquear los cambios en el objeto original , no permite añadir ni eliminar propiedades

// Para modificar el objeto original pero no se permite eliminar o agregar propiedades
// Object.seal(producto); Seal nos permite modificar las propiedades del objeto pero no eliminar ni agregar

//Reescribir el objeto o un valor de un objeto
producto.nombre = 'Monitor Curvo';

//Si no existe una propiedad, se crea
producto.imagen = 'imagen.jpg';

//Eliminar una propiedad
delete producto.disponible;

console.log(producto);