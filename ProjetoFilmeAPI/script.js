let container = document.querySelector('.container')
let formulario = document.querySelector('.formulario')
let filmeInput = document.querySelector('.form-control')
let filmeInfo = document.querySelector('.filme-info')
let prevPageButton = document.getElementById('prevPage');
let nextPageButton = document.getElementById('nextPage');

async function getApi(filme) {
    let request = await fetch(`https://www.omdbapi.com/?s=${filme}&apikey=e6c43dc6`);
    let data = await request.json();

    if (data.Response === "True") {
        filmeInfo.innerHTML = "";

        data.Search.forEach(filme => {
            filmeInfo.innerHTML += `
                <div class="movie">
                    <div class="movie-header">
                        <h2 class="movie-h2">${filme.Title}</h2>
                        <h3 class="movie-h3">Lançamento: ${filme.Year}</h3>
                    </div>
                    <p><img src="${filme.Poster}" alt="${filme.Title}"></p>
                </div>
            `;
        <div class="paginacao">
        <button id="prevPage">Página Anterior</button>
        <button id="nextPage">Próxima Página</button>
        </div>

        });
    } else {
        filmeInfo.innerHTML = "<p>Filme não encontrado.</p>";
    }
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    getApi(filmeInput.value)
})
