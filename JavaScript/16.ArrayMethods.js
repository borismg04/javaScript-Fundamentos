// Funciones - Arrow Function y Array Methods
const tecnologias = ['HTML','CSS','JavaScript','React','Node.js'];
const numeros = [10,20,30,40,50];

let nuevoArray;

//Filter - Arrow Function
nuevoArray = tecnologias.filter( tech => tech === 'React' );

//Comprobar si existe un elemento en el arreglo
  // const resultado = tecnologias.includes('React'); //true

//Some  Devuelve si al menos uno cumpla con la condicion
  // const resultado = numeros.some( num => num > 10 ); //true
  
//Find - Devuelve el primer elemento que cumpla con la condicion
  // const resultado = numeros.find( num => num > 5 ); //10

//Every - Retorna true o false si todos cumplen con la condicion
// const resultado = numeros.every( num => num > 5 );

// Reduce - Acumula en el total 
  // const resultado = numeros.reduce( (total , numero) => numero+total,0);

//Filter - Crea un nuevo arreglo con los elementos que cumplan con la condicion
  // const resultado = tecnologias.filter( tech => tech !== 'Node.js' );
  // const resultado2 = numeros.filter( num => num > 15 );


tecnologias.forEach((tech,index) =>console.log(tech,index));

const arrayMap = tecnologias.map(tech => tech.toUpperCase());
console.log('arrayMap:', arrayMap)

// console.log('Resultado:', resultado);
// console.log('Resultado2:', resultado2);