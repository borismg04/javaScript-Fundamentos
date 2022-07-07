// Fetch API Promesas

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
//Ejemplo 2 - Fetch API Promesas
const consultarAPI = () => {
  fetch(url)
    .then( ( response ) => {
      return response.json();
    }
  ).then((response)=>{
    response.forEach(comentario => {
      console.log(comentario);
    });
})
}
consultarAPI();
