// Imports and exports in JavaScript

//Renombrar una funcion exportada Ejemplo = (sumar as suma)
import {sumar,restar} from './28.1-funciones.js';

const resultado = sumar(10, 20);
const resultado2 = restar(100, 20);

console.log('Resultado funcion Sumar:', resultado)
console.log('Resultado funcion Restar:', resultado2)
