//Manipular elementos HTML con JS 

// Modificar el texto de un elemento
const heading = document.querySelector('.heading');
heading.textContent = 'UN NUEVO HEADING';
console.log(heading.textContent);

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Un valor por defecto';
console.log(inputNombre.value);

const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace :)');