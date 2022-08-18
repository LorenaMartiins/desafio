import "./styles.css";
import React, { Component } from "react";

const api_key = "?api_key=d59cb43fbc0ea30bbf9da6d6ab43b3c7";
const APIURL =
  "https://api.themoviedb.org/3/movie/550?api_key=d59cb43fbc0ea30bbf9da6d6ab43b3c7";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

//  url + chave + pesquisa com região em EN
var SEARCHPI =
  "https://api.themoviedb.org/3/search/movie" + api_key + "&region=EN&query=";

class Content extends Component {
  render() {
    return (
      <div>
        <div id="content"></div>
      </div>
    );
  }

  componentDidMount() {
    let content = document.getElementById("content");
    content.innerHTML = "";
    console.log("montou");
  }
}

async function getMovies(url) {
  const resp = await fetch(url);

  const respData = await resp.json();

  showMovies(respData.results);
  console.log(respData);
}

// function adicionandoFilme() {
//   var adicionar = "";

//   adicionar = [
//     "Purple Hearts",
//     "Uncharted: Fora do Mapa",
//     "Lightyear",
//     "Eternals",
//     "Velozes e Furiosos 9"
//   ];

//   const adicionando = adicionar[Math.floor(Math.random() * adicionar.length)];
//   getMovies(SEARCHPI + adicionando);
//   console.log(adicionando);

// }

function escolheFilme() {
  var filme = "";

  filme = [
    "Homem-Aranha: Sem Volta para Casa",
    "Encanto",
    "Vingadores: Ultimato",
    "Jurassic World: O Mundo dos Dinossauros",
    "Piratas do Caribe: A Maldição do Pérola Negra",
    ""
  ];

  const escolhendo = filme[Math.floor(Math.random() * filme.length)];

  getMovies(SEARCHPI + escolhendo);
  console.log(escolhendo);
}

function showMovies(movies) {
  let content = document.getElementById("content");

  content.innerHTML = "";

  var i = 0;
  while (i < 1) {
    var movie = movies[0];
    const { poster_path, title, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
      <img src="${IMGPATH + poster_path}" alt="${title}"/>
      <div class="movie-info">
      <h3 class="titulo">${title}</h3>
      </div>
      <div class="overview">
      <h3>${overview}</h3>
      </div>
      <div class="vote_aberage">
      <h3>${vote_average}</h3>
      </div>
    `;

    content.appendChild(movieEl);
    i++;
  }
}

function BotaoEscolheFilme() {
  return (
    <div>
      <button onClick={escolheFilme}>Clique aqui</button>
    </div>
  );
}

// function BotaoAdicionandoFilme() {
//   return (
//     <div>
//       <button onClick={adicionandoFilme}>Adicionar</button>
//     </div>
//   );
// }

export default function App() {
  return (
    <div className="App">
      <h1>Recomenda Filmes</h1>
      <h3>Clique no botão para escolher um filme</h3>
      <BotaoEscolheFilme />
      {/* <BotaoAdicionandoFilme /> */}
      <Content />
    </div>
  );
}
