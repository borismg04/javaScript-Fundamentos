// Templates String

const producto = "Tablet de 10 pulgadas";
const precio = 400;
const marca = "Samsung";

function textoFuncion() {
  return "Esto proviene de la funcion";
}

console.log(producto, precio, marca); //Tablet de 10 pulgadas 400 Samsung
console.log(`El producto ${producto} cuesta ${precio} y es marca ${marca}`); //El producto Tablet de 10 pulgadas cuesta 400 y es marca Samsung
console.log(`El producto ${producto} cuesta ${precio} y es marca ${marca} , ${textoFuncion()}`); //El producto Tablet de 10 pulgadas cuesta 400 y es marca Samsung Esto proviene de la funcion

"Fundamento de JavaScript"