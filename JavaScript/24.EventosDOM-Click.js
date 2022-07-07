// Eventos del Dom - Click

const heading = document.querySelector('.heading');
heading.addEventListener('click', () => {
  console.log('Diste Click en el heading');
});

const heading2 = document.querySelector('.heading');
heading2.addEventListener('click', () => {
  heading2.textContent = 'UN NUEVO HEADING';
});

const enlaces = document.querySelectorAll('.navegacion a');

enlaces.forEach(enlace => 
  enlace.addEventListener('click', () => {
  console.log('Diste Click en el enlace');
})
);
