// Definindo a estrutura do objeto time
function Time(nome, avatar) {
    this.nome = nome;
    this.avatar = avatar;
    this.vitoria = 0;
    this.empate = 0;
    this.derrota = 0;
    this.pontos = 0;
    this.partidasJogadas = 0;
    this.golsMarcados = 0;
    this.golsSofridos = 0;
    this.ultimasPartidas = [];
}

// Lista de informações dos times
var informacoesTimes = [
    { nome: 'Palmeiras', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Palmeiras_logo.svg/120px-Palmeiras_logo.svg.png'},
    { nome: 'Botafogo', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Botafogo_de_Futebol_e_Regatas_logo.svg/120px-Botafogo_de_Futebol_e_Regatas_logo.svg.png' },
    { nome: 'Grêmio', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Gremio_logo.gif/120px-Gremio_logo.gif' },
    { nome: 'Bragantino', avatar: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9e/RedBullBragantino.png/140px-RedBullBragantino.png' },
    { nome: 'Atlético-MG', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Atletico_mineiro_galo.png/120px-Atletico_mineiro_galo.png' },
    { nome: 'Flamengo', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Flamengo_braz_logo.svg/120px-Flamengo_braz_logo.svg.png' },
    { nome: 'Atlético-PR', avatar: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/c7/Club_Athletico_Paranaense_2019.png/120px-Club_Athletico_Paranaense_2019.png' },
    { nome: 'Fuminense', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/FFC_crest.svg/130px-FFC_crest.svg.png' },
    { nome: 'Cuiabá', avatar: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/20/Cuiab%C3%A1EC2020.png/120px-Cuiab%C3%A1EC2020.png' },
    { nome: 'São Paulo', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/120px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png' },
    { nome: 'Corinthians', avatar: 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/b4/Corinthians_simbolo.png/120px-Corinthians_simbolo.png' },
    { nome: 'Fortaleza', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/FortalezaEsporteClube.svg/120px-FortalezaEsporteClube.svg.png' },
    { nome: 'Internacional', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Escudo_do_Sport_Club_Internacional.svg/160px-Escudo_do_Sport_Club_Internacional.svg.png' },
    { nome: 'Santos', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Santos_Logo.png/140px-Santos_Logo.png' },
    { nome: 'Vasco da Gama', avatar: 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ac/CRVascodaGama.png/120px-CRVascodaGama.png' },
    { nome: 'Bahia', avatar: 'https://upload.wikimedia.org/wikipedia/pt/thumb/9/90/ECBahia.png/130px-ECBahia.png' },
    { nome: 'Cruzeiro', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Cruzeiro_Esporte_Clube_%28logo%29.svg/120px-Cruzeiro_Esporte_Clube_%28logo%29.svg.png' },
    { nome: 'Goiás', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Goi%C3%A1sLogo21.png/130px-Goi%C3%A1sLogo21.png' },
    { nome: 'Coritiba', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Coritiba_FBC_%282011%29_-_PR.svg/120px-Coritiba_FBC_%282011%29_-_PR.svg.png' },
    { nome: 'América-MG', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Escudo_Am%C3%A9rica_de_Minas.png/120px-Escudo_Am%C3%A9rica_de_Minas.png' },
];

// Criando instâncias da classe Time a partir da lista de informações
var times = informacoesTimes.map(function(info) {
    return new Time(info.nome, info.avatar);
});

// Atualizando os pontos e classificando os times
function atualizarClassificacao() {
    // Ordenando os times pela pontuação
    times.sort(function(a, b) {
        if (a.pontos !== b.pontos) {
            return b.pontos - a.pontos;
        } else if (a.vitoria !== b.vitoria) {
            return b.vitoria - a.vitoria;
        } else if (a.golsMarcados - a.golsSofridos !== b.golsMarcados - b.golsSofridos) {
            return (b.golsMarcados - b.golsSofridos) - (a.golsMarcados - a.golsSofridos);
        } else {
            return b.golsMarcados - a.golsMarcados;
        }
    });

    // Atualizando a classificação e exibindo na tela
    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        time.posicao = i + 1; // Posição na tabela
        exibirTime(time);
    }
}

// Exibindo os times na tabela
function exibirNaTela() {
    var elementoTabela = document.querySelector('table');
    elementoTabela.innerHTML = `
        <tr>
            <th>Posição</th>
            <th class"avatar">Avatar</th>
            <th>Time</th>
            <th>Pontos</th>
            <th>Vitórias</th>
            <th>Empates</th>
            <th>Derrotas</th>
            <th>Gols Marcados</th>
            <th>Gols Sofridos</th>
            <th>Saldo de Gols</th>
            <th>Últimas 5 Partidas</th>
            <th>Ações</th>
        </tr>
    `;

    atualizarClassificacao();
}

// Adicionando vitória
function adicionarVitoria(index) {
    var time = times[index];
    time.vitoria++;
    time.pontos += 3;
    time.partidasJogadas++;
    time.ultimasPartidas.push('Vitória');

    // Manter apenas as últimas 5 partidas
    if (time.ultimasPartidas.length > 5) {
        time.ultimasPartidas.shift();
    }

    atualizarClassificacao();
}

// Adicionando empate
function adicionarEmpate(index) {
    var time = times[index];
    time.empate++;
    time.pontos++;
    time.partidasJogadas++;
    time.ultimasPartidas.push('Empate');

    // Manter apenas as últimas 5 partidas
    if (time.ultimasPartidas.length > 5) {
        time.ultimasPartidas.shift();
    }

    atualizarClassificacao();
}

// Adicionando derrota
function adicionarDerrota(index) {
    var time = times[index];
    time.derrota++;
    time.partidasJogadas++;
    time.ultimasPartidas.push('Derrota');

    // Manter apenas as últimas 5 partidas
    if (time.ultimasPartidas.length > 5) {
        time.ultimasPartidas.shift();
    }

    atualizarClassificacao();
}

// Exibindo informações de um time na tabela
function exibirTime(time) {
    var elementoTabela = document.querySelector('table');
    var ultimasPartidasHTML = time.ultimasPartidas.map(function(resultado) {
        if (resultado === 'Vitória') {
            return '<span class="vitoria">V</span>';
        } else if (resultado === 'Empate') {
            return '<span class="empate">E</span>';
        } else {
            return '<span class="derrota">D</span>';
        }
    }).join('');

    elementoTabela.innerHTML += `
        <tr>
            <td>${time.posicao}</td>
            <td><img src="${time.avatar}" alt="Avatar"></td>
            <td>${time.nome}</td>
            <td>${time.pontos}</td>
            <td>${time.vitoria}</td>
            <td>${time.empate}</td>
            <td>${time.derrota}</td>
            <td>${time.golsMarcados}</td>
            <td>${time.golsSofridos}</td>
            <td>${time.golsMarcados - time.golsSofridos}</td>
            <td class="ultimas-partidas">${ultimasPartidasHTML}</td>
            <td>
                <button onClick="adicionarVitoria(${time.posicao - 1})">Vitória</button>
                <button onClick="adicionarEmpate(${time.posicao - 1})">Empate</button>
                <button onClick="adicionarDerrota(${time.posicao - 1})">Derrota</button>
            </td>
        </tr>
    `;
}

// Inicializando a exibição na tela
exibirNaTela();

