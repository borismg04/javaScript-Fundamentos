// Eventos del Dom - Submit

const formulario = document.querySelector('#formulario');
formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.querySelector('.nombre').value;
  const password = document.querySelector('.password').value;

  console.log(nombre);
  console.log(password);

  if (nombre === '' || password === '') {
    console.log('Todos los campos son obligatorios');
  } else {
    console.log('Todos bien , enviando datos ....');
  }

  console.log('Formulario Enviado');
});

