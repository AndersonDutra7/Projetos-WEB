let container = document.querySelector('.container')
let formulario = document.querySelector('.formulario')
let filmeInput = document.querySelector('.form-control')
let filmeInfo = document.querySelector('.filme-info')
let prevPageButton = document.getElementById('prev-page');
let nextPageButton = document.getElementById('next-page');
prevPageButton.style.display = 'none';
nextPageButton.style.display = 'none';
let paginaInicial = 1;

async function getApi(filme, pagina) {
    let request = await fetch(`https://www.omdbapi.com/?s=${filme}&apikey=e6c43dc6&page=${pagina}`);
    let data = await request.json();

    if (data.Response === "True") {
        filmeInfo.innerHTML = "";

        data.Search.forEach((filme) => {
            const posterUrl = filme.Poster !== "N/A" ? filme.Poster : 'imagens/semImagem.PNG';
            filmeInfo.innerHTML += `
                <div class="movie">
                    <div class="movie-header">
                        <h2 class="movie-h2">${filme.Title}</h2>
                        <h3 class="movie-h3">Lançamento: ${filme.Year}</h3>
                    </div>
                    <p><img src="${posterUrl}" alt="${filme.Title}"></p>
                </div>
            `;
        });
        prevPageButton.style.display = 'block';
        nextPageButton.style.display = 'block';
    } else {
        filmeInfo.innerHTML = "<p>Filme não encontrado.</p>";
    }
}

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    paginaInicial = 1;
    getApi(filmeInput.value, paginaInicial);
});

prevPageButton.addEventListener('click', function(e) {
    e.preventDefault();
    if (paginaInicial > 1) {
        paginaInicial--;
        getApi(filmeInput.value, paginaInicial);
    }
});

nextPageButton.addEventListener('click', function(e) {
    e.preventDefault();
    paginaInicial++;
    getApi(filmeInput.value, paginaInicial);
});
