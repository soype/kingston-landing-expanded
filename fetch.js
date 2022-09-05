

const get_data = async (id) => {
    // const response = await fetch("https://api.themoviedb.org/3/movie/550?api_key=8964560b5480d6f8ccf3c73c7a53fbde/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg");
    const api_html = `https://api.themoviedb.org/3/movie/10${id}?api_key=8964560b5480d6f8ccf3c73c7a53fbde`;
    const response = await fetch(api_html,{
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    });
    const json = await response.json();
    const score = Math.round(json.vote_average * 100) / 100;

    let data =  `
        <div class="movie-img">
            <img class="movie-img-src" src="${"https://image.tmdb.org/t/p/w500" + json.backdrop_path}" alt="">
            <p class="rating">${score}</p>
            <p class="img-title">${json.original_title}</p>
        </div>
        <div class="movie-text">
            <h2 class="movie-title">${json.original_title}</h2>
            <p class="movie-desc">${json.overview}</p>
        </div>
    `;
    document.getElementById(`card-${id}`).innerHTML = data;
}

const render_movies = (number) => {
    let data = `
    <div id="card-${number}" class=card> Hola
    </div>
    `
    document.getElementById("movies").appendChild = data;
}

const number = 8;

for(let i=1; i<(number+1); i++){
    get_data(i);
};