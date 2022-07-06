// Funciones - Arrow Function y Array Methods
const tecnologias = ['HTML','CSS','JavaScript','React','NodeJS'];

//Ejemplo 1 = Arrow Function (tech =>)
const newArray = tecnologias.map( (tech)=> {
  if(tech === 'JavaScript'){
    return tech = 'REEMPLAZO';
  } else {
    return tech;
  }
})
//Ejemplo 2 = Arrow Function (tech => )
const newArray2 = tecnologias.filter( (tech) =>{
  return tech === 'React';//Sola mente me imprime React
})

console.log('newArray:', newArray)
console.log('newArray2:', newArray2)
