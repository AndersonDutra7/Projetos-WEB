// 1. Lista para armazenar as imagens fornecidas
var listaDeFilmes = [];

function adicionarFilme() {
    // 2. Transformar a imagem em um botão que direciona para o trailer do filme no YouTube
    var filmeFavorito = document.getElementById('filme').value;
    if (filmeFavorito.trim() === '') {
        alert('Por favor, insira uma URL válida.');
        return;
    }

    // 3. Analisar a URL informada e recusar se não for uma imagem
    if (!isValidImage(filmeFavorito)) {
        alert('A URL fornecida não pertence a uma imagem.');
        return;
    }

    // Adicionar a imagem à lista
    listaDeFilmes.push(filmeFavorito);

    // Atualizar a exibição da lista
    atualizarListaFilmes();

    // Limpar o campo de entrada
    document.getElementById('filme').value = '';
}

function atualizarListaFilmes() {
    var elementoListaFilmes = document.getElementById('listaFilmes');
    
    // Limpar a lista antes de atualizar
    elementoListaFilmes.innerHTML = '';

    // Iterar sobre a lista de filmes e adicionar cada imagem como um botão
    listaDeFilmes.forEach(function(filme) {
        elementoListaFilmes.innerHTML += '<button class="mostrarTrailer" onclick="mostrarTrailer(\'' + filme + '\')"><img src="' + filme + '" alt="Filme"></button>';
    });
}

// Função para mostrar o trailer no YouTube ao clicar no botão
function mostrarTrailer(url) {
    // Analisar a URL para extrair o nome do filme (assumindo que o nome está na parte final da URL)
    var nomeDoFilme = extrairNomeDoFilme(url);

    // Verificar se o nome do filme foi extraído com sucesso
    if (nomeDoFilme) {
        // Construir a URL de busca no YouTube usando o nome do filme
        var buscaNoYouTubeURL = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(nomeDoFilme + ' trailer');

        // Redirecionar para a página de resultados de busca no YouTube
        window.open(buscaNoYouTubeURL, '_blank');
    } else {
        alert('Não foi possível extrair o nome do filme da URL.');
    }
}

function extrairNomeDoFilme(url) {
    // Exemplo de lógica para extrair o nome do filme da URL
    // Neste exemplo, assume-se que o nome do filme está após a última barra na URL
    var partesDaURL = url.split('/');
    var ultimaParte = partesDaURL[partesDaURL.length - 1];

    // Remover possíveis parâmetros da URL (por exemplo, "?v=" para URLs do YouTube)
    var nomeDoFilmeSemParametros = ultimaParte.split('?')[0];

    // Remover extensões de arquivo comuns (por exemplo, ".html")
    var nomeDoFilmeSemExtensao = nomeDoFilmeSemParametros.replace(/\.[^/.]+$/, '');

    return nomeDoFilmeSemExtensao;
}


// Função para validar se a URL fornecida pertence a uma imagem (pode não ser totalmente abrangente)
function isValidImage(url) {
    // Expressão regular para verificar URLs de imagens comuns
    var imagePattern = /\.(jpeg|jpg|gif|png)$/i;
    return imagePattern.test(url);
}
