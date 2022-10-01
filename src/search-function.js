import { API_URL, SEARCH_URL, getMoviesData } from "./index.js";

const searchMovie = document.getElementById('search-bar-section');
searchMovie.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchWhat = searchFilm.value;

    if (searchWhat) {
        getMoviesData(SEARCH_URL+'&query='+searchWhat);
    }
    else {
        getMoviesData(API_URL);
    }

    if (searchFilm.value == '') {
        alert('Masukkan judul film terlebih dahulu :)')
    }
})