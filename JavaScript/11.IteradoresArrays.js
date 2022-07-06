// Iteradores en JS

//Iteradores son funciones que nos permiten recorrer un arreglo
const tecnologias = ['HTML','CSS','JavaScript','React','NodeJS'];

// forEach = Accede a cada elemento del arreglo
const arrayForEach = tecnologias.forEach(function(tech){
  // console.log('tecnologias:', tecnologias)
  // console.log("Ejecuntando forEach");
  return tech;
})

// map = Crea un nuevo arreglo con los elementos del arreglo original
const arrayMap = tecnologias.map(function(tech){
  return tech;
})

console.log('arrayForEach:', arrayForEach)
console.log('arrayMap:', arrayMap)
