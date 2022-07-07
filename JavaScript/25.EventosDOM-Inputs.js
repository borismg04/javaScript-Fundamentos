// Eventos del Dom - Inputs

const inputNombre = document.querySelector('.nombre');

// inputNombre.placeholder = 'UN PLACEHOLDER DESDE JS ';

//Ejemplo input
// inputNombre.addEventListener('input', () => {
//   // console.log("input = Escribiendo desde el input");
//   console.log(inputNombre.value);
// });

inputNombre.addEventListener('input', (e) => {
  console.log(e.target.value);
});

// //Ejemplo keydown
// inputNombre.addEventListener('keydown', () => {
//   console.log("keydown = Escribiendo desde el input");
// });

// //Ejemplo keyup
// inputNombre.addEventListener('keyup', () => {
//   console.log("keyup = Escribiendo desde el input");
// });

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('keyup', () => {
  inputPassword.type = 'text';

  setTimeout(() => {
    inputPassword.type = 'password';
  }, 5000);
});