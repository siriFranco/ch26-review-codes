/* El código importa información API por medio de fetch de un repositorio externo para mostrarlo en el documento */

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
 const $n = document.querySelector('.name'); //se renombró const por un nombre que permita relacionarla con su contenido
const $b = document.querySelector('.blog'); //se renombró const por un nombre que permita relacionarla con su contenido
const $l = document.querySelector('.location'); //se renombró const por un nombre que permita relacionarla con su contenido

 async function displayUser(username) { //se colocó async para declarar la función correspondiente con await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // se añade esta línea para obtener datos en json
  console.log(data);
  $n.textContent = `${data.name}`; //se cambian las comillas por acento grave para funcionar 
  $b.textContent = `${data.blog}`; //se cambian las comillas por acento grave para funcionar 
  $l.textContent = `${data.location}`; //se cambian las comillas por acento grave para funcionar 
}

function handleError(err, $n) { // se anade el $n para llamarlo
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; //se añade signo $ para que se llame a n y el;
}

displayUser('stolinski').catch(handleError); 