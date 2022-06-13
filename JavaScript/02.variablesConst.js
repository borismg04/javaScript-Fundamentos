/* Variables CONST

const = Definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable,
  el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.

  const = El ámbito o scope para una variable declarada con const es, 
    al igual que con let, el bloque, pero si la declaración con let previene la sobreescritura de variables, 
    const directamente prohíbe la reasignación de valores 

*/


const cliente = "Boris";
const precioDescuento = 220;

console.log(cliente);
console.log(precioDescuento);

