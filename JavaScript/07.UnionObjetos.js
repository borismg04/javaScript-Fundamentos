// Objetos Union con 2 o mas Objetos 

const producto= {
  nombre: 'Tablet',
  precio: 1000,
  disponible: true,
}

const cliente = {
  nombre: 'Boris',
  premium: true,
}

// const nuevoObjeto =Object.assign(producto , cliente); De esta manera se peude pero se modifi9ca el nombre y coje el nombre del cliente
const nuevoObjeto ={
  producto:{...producto},
  cliente:{...cliente},
};
console.log(nuevoObjeto);

