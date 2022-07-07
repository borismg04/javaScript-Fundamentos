// Fetch API async/await

url = 'https://jsonplaceholder.typicode.com/comments';

//Ejemplo 1 - Fetch API Promesas
// fetch(url)
//   .then( ( response ) => {
//     return response.json();
//   }).then((response)=>{
//     response.forEach(comentario => {
//       console.log(comentario);
//     });
// })

console.log('<---------------------------------------------------->');

//Ejemplo 2 - Fetch API Async/Await

const consultarAPI = async () => {
  const response = await fetch(url);
  const responseJSON = await response.json();
  responseJSON.forEach(comentario => {
    console.log(comentario);
  });
}

//Muestra como se comporta el Async/Await
// const consultarAPI = async () => {
//   const response = await fetch(url);
//   console.log(response);
//   console.log('Despues de response');
//   const responseJSON = await response.json();
//   console.log(responseJSON);
//   console.log('Despues de responseJSON');

// }

consultarAPI();
