// Scope 

const precio = 300;

// la variable const dentro de la funcion se ejecuta la que esta dentro de la funcion apesar que tiene el mismo nombre
function unaFuncion() { 
  const precio = 600;

  console.log(precio);
}
// la variable const que esta por fuera toma la variable global que esta fuera de la funcion apesar que tiene el mismo nombre
if (true){
  console.log(precio);
}

unaFuncion();