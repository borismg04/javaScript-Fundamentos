/* TODO: Estructuras y Tipos de Datos en JS 

  Estructuras =

    Undefined = No se ha definido un valor
    Boolean = Verdadero o Falso
    Number = Números enteros y decimales
    String = Cadenas de texto
    Function = Funciones
    Symbol = Símbolos
    BigInt = Números enteros grandes
    Object = Objetos
    Null = Nulo
*/ 

//Undefined
let nombre;
console.log(nombre);
// Como no esta definida la variable nombre, el valor es undefined
console.log(typeof nombre);//typeof nos devuelve el tipo de dato de la variable

//Como esta definida la variable nombre, el valor en consola es Boris
let nombre1= "Boris";
console.log("Nombre: ",nombre1);
console.log("Nombre: ",typeof nombre1);

//Boolean
const activo = true;
console.log("Activo: ",activo);
console.log("Activo: ",typeof activo);

//Number
const num = 100.123;//Decimales
const num2 = 200;//Enteros
const num3 = -300;//Negativos

console.log("num: ",num);
console.log("num: ",typeof num);
console.log("num2: ",num2);
console.log("num2: ",typeof num2);
console.log("num3: ",num3);
console.log("num3: ",typeof num3);

//String (Cadenas de texto)
const estudiante = "Boris";
let producto = 'Laptop 24 pulgadas';
const numeroString = "100";

console.log(typeof numeroString);// Marca String porque es una cadena de texto
console.log(`El estudiante ${estudiante} tiene una ${producto}`);

//BigInt (Números enteros grandes)
const numeroGrande = BigInt(15618564616515641897487);
console.log("numeroGrande: ",numeroGrande);
console.log("numeroGrande: ",typeof numeroGrande);
// Casi nunca se utiliza 

//Symbol (Símbolos)
// Los símbolos son un tipo de dato especial que no se puede reasignar
const primerSimbolo = Symbol(30);
const segundoSimbolo = Symbol(30);

console.log("primerSimbolo: ",primerSimbolo);
console.log("segundoSimbolo: ",segundoSimbolo);
console.log(primerSimbolo === segundoSimbolo);//false
console.log(primerSimbolo.valueOf());
console.log(segundoSimbolo.valueOf());

//Null (Nulo)
const nulo = null; // Null es un valor que no tiene ningún valor y siempre es de tipo object
console.log("nulo: ",nulo);
console.log("nulo: ",typeof nulo);





