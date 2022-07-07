// Selectores DOM

//querySelector es para retornar un elemento
const heading = document.querySelector('h2');

// console.log('heading =',heading);
console.log('heading Text Content=',heading.textContent);
// console.log('heading tagName =',heading.tagName);
// console.log('heading className=',heading.className);
// console.log('heading ID=',heading.id);
// console.log('heading classList =',heading.classList);

//querySelectorAll es para retornar todos los elementos que cumplan con el selector
const enlaces = document.querySelectorAll('.navegacion a');

console.log('enlaces =',enlaces);