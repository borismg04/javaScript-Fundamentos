// Operaciones en los arreglos

const tecnologias = ['HTML','CSS','JavaScript','React','NodeJS'];

//Añadir elementos al Array

// tecnologias.push('FINAL');//Agrega un elemento al final del arreglo
// tecnologias.unshift('INICIO');//Agrega un elemento al inicio del arreglo

const nuevoArreglo = [...tecnologias,'Python','Ruby'];//Agrega un arreglo al final del arreglo
// const nuevoArreglo = ['GraphQL',...tecnologias];//Agrega un arreglo al inicio del arreglo

//Eliminar elementos del Array
// tecnologias.pop();//Elimina el ultimo elemento del arreglo
// tecnologias.shift();//Elimina el primer elemento del 
// tecnologias.splice(2,1);//Elimina de una posición especifica

//Me imprime todos los arreglos por separado 
// const nuevoArray = tecnologias.filter( function(tech){
//   console.log(tech);
// })

//Con esta funcion me trae los arreglos que cumplan con la condicion
// const nuevoArray = tecnologias.filter( function(tech){
//  return tech !== 'JavaScript';//menos que JavaScript
//   return tech === 'React';//Sola mente me imprime React
// })

//Reemplazar o Modificar elementos del Array
// tecnologias[0] = 'REEMPLAZO';//Reemplaza el elemento del arreglo



console.table(tecnologias);
// console.table(nuevoArreglo);
console.table(nuevoArray);