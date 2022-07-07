// Fetch API ASYNC / AWAIT MULTIPLES LLAMADOS

const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/photos';


const consultarAPI = async () => {

  const inicio = performance.now();

  const response = await fetch(url);
  const responseJSON = await response.json();
  // console.log(responseJSON);

  // console.log('<-----INICIANDO SEGUNDA CONSULTA----->');

  const response2 = await fetch(url2);
  const responseJSON2 = await response2.json();
  // console.log(responseJSON2);

  const fin = performance.now();

  console.log(`Tiempo de ejecución PRIMER ASYNC: ${(fin - inicio) / 1000} segundos`);
}
consultarAPI();

const consultarAPI2 = async () => {

  const inicio = performance.now();
  
  const [respuesta , respuesta2] =await Promise.all([fetch(url),fetch(url2)]);
  const resultado = await respuesta.json();
  const resultado2 = await respuesta2.json();
  // console.log(resultado);
  // console.log(resultado2);

  const fin = performance.now();

  console.log(`Tiempo de ejecución SEGUNDO ASYNC: ${(fin - inicio) / 1000} segundos`);
}

consultarAPI2();
