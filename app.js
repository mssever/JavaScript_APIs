'use strict';

const api_key = 'yQ563bcaw5tSmEwXQNzfHBYALvi16iit';
const api_url = 'https://api.giphy.com/v1/gifs/translate?';

function build_url(...pieces) {
  pieces.push(`api_key=${api_key}`);
  return api_url + pieces.join('&');
}

document.getElementById('search-form').addEventListener('submit', (evt) => {
  evt.preventDefault();
  let query = document.getElementById('search').value;
  let url = build_url(`s=${query}`);
  fetch(url, {mode: 'cors'})
    .then(response => response.json())
    .then(data => {
      let img = document.getElementById('gif');
      img.src = data.data.images.original.url;
      img.alt = data.data.title;
    })
    .catch((err) => {
      console.error(err);
    })
})
