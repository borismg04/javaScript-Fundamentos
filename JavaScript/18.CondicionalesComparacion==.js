// Condicionales Comparacion Estricta (===)

const numero1 = 10;
const numero2 = "10";

/**
    == (Comparacion pero no es estricta)
    === (Comparacion estricta - Revisa valor y tipo de dato)
 */

console.log("numero1 = ",typeof numero1);//number
console.log("numero1 = ",typeof numero2);//string
    
if (numero1 === numero2) { // En caso tal se peude transformar el valor de numero2 a number (Number(numero2) o (String(numero))
  console.log("Si , Son iguales");
}else{
  console.log("No son iguales");
}

const autenticado = true;
if ( autenticado === true ) {
  console.log("Si esta Autenticado");
}
/**
 * == igual que
 * != diferente que
 * === identico que
 * !== no identico que
 */