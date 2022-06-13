/* TODO: Variables CONST

const = Definimos variables de sólo lectura (no confundir con inmutables), esto quiere decir que, cuando asignamos una variable,
  el nombre de esta va estar asignada a un puntero en memoria, el cual no puede ser sobreescrito o reasignado.

  const = El ámbito o scope para una variable declarada con const es, 
    al igual que con let, el bloque, pero si la declaración con let previene la sobreescritura de variables, 
    const directamente prohíbe la reasignación de valores 

*/

const cliente = "Boris";
const precioDescuento = 220;

// No se puede reasignar el valor de la variable con Const
//FIXME: cliente = 20 ; Como es const marca error en tiempo de ejecución 
//<<Uncaught TypeError: Assignment to constant variable.>>

//No se pueden iniciar sin valor la variable con Const
//FIXME: const precio; como es const sin ningun valor marca error en tiempo de ejecución
// console.log(precio);
//<<Uncaught SyntaxError: Missing initializer in const declarationUncaught SyntaxError: Missing initializer in const declaration>>


console.log(cliente);
console.log(precioDescuento);

