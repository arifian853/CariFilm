const API_KEY           = 'api_key=ac9e9e19a39588f3a7bd6f6589c506f1';
const BASE_URL          = 'https://api.themoviedb.org/3';
const IMG_URL           = 'https://image.tmdb.org/t/p/w500';
export const SEARCH_URL = BASE_URL + '/search/movie?' + API_KEY;
export const API_URL    = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

//Pemanggilan id
const showContent = document.getElementById('mainSection');

//Fungsi mendapatkan data dari API
getMoviesData(API_URL);
export async function getMoviesData(url) {
    fetch(url).then(res => res.json()).then(data => {
        movieShowData(data.results);
    })  
}

//Fungsi menampilkan hasil fetch API
function movieShowData(data) {
    showContent.innerHTML = '';

    data.map(movie => {
        const {title, vote_average, poster_path, release_date, overview, original_language} = movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-element');
        movieElement.innerHTML = `
        <div>
        <div class="movie-element">
        <img class="poster-img" src="${IMG_URL+poster_path}" alt="">
            <div class="overview" id="info">
                    <h1>${title}</h1>
                    <span class="score"><i class="fa-solid fa-star"></i>${vote_average}/10</span> 
                    <br> <br>
                    <hr>
                    <p>${overview}</p>
                    <hr />
                    <p>Release Date : <strong> ${release_date} </strong></p>
                    <p>Language : <strong> ${original_language} </strong></p>
            </div>
    </div>
        </div>
        `

        showContent.appendChild(movieElement);
    })
}

