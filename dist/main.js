(()=>{"use strict";const e=document.getElementById("mainSection");!async function(n){fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ac9e9e19a39588f3a7bd6f6589c506f1").then((e=>e.json())).then((n=>{!function(n){e.innerHTML="",n.map((n=>{const{title:t,vote_average:s,poster_path:a,release_date:i,overview:o,original_language:r}=n,c=document.createElement("div");c.classList.add("movie-element"),c.innerHTML=`\n        <div>\n        <div class="movie-element">\n        <img class="poster-img" src="${"https://image.tmdb.org/t/p/w500"+a}" alt="">\n            <div class="overview" id="info">\n                    <h1>${t}</h1>\n                    <span class="score"><i class="fa-solid fa-star"></i>${s}/10</span> \n                    <br> <br>\n                    <hr>\n                    <p>${o}</p>\n                    <hr />\n                    <p>Release Date : <strong> ${i} </strong></p>\n                    <p>Language : <strong> ${r} </strong></p>\n            </div>\n    </div>\n        </div>\n        `,e.appendChild(c)}))}(n.results)}))}()})();