// Simulação de dados de categorias e anúncios (substitua isso com dados reais)
const categoriesData = ['Eletrônicos', 'Roupas', 'Acessórios', 'Automóveis'];
const announcementsData = [
    { title: 'Anúncio 1', category: 'Eletrônicos', image: 'url_da_imagem_1', details: 'Detalhes do anúncio 1' },
    { title: 'Anúncio 2', category: 'Roupas', image: 'url_da_imagem_2', details: 'Detalhes do anúncio 2' },
    // Adicione mais anúncios conforme necessário
];

// Função para exibir categorias
function displayCategories() {
    const categoriesList = document.getElementById('categories-list');
    categoriesData.forEach(category => {
        const li = document.createElement('li');
        li.textContent = `${category} (${getAnnouncementCount(category)})`;
        categoriesList.appendChild(li);
    });
}

// Função para obter a contagem de anúncios por categoria
function getAnnouncementCount(category) {
    return announcementsData.filter(ad => ad.category === category).length;
}

// Função para exibir anúncios
function displayAnnouncements(keyword) {
    const announcementsList = document.getElementById('announcements-list');
    announcementsList.innerHTML = '';

    const filteredAnnouncements = announcementsData.filter(ad => ad.title.toLowerCase().includes(keyword.toLowerCase()));

    if (filteredAnnouncements.length === 0) {
    document.getElementById('no-results-message').style.display = 'block';
    } else {
    document.getElementById('no-results-message').style.display = 'none';
    }

    filteredAnnouncements.forEach(ad => {
    const card = document.createElement('div');
    card.className = 'announcement-card';
    card.innerHTML = `
        <img src="${ad.image}" alt="${ad.title}">
        <h3>${ad.title}</h3>
        <p>${ad.details}</p>
    `;

    card.addEventListener('click', () => {
        // Implemente a lógica de redirecionamento para a página de detalhes aqui
        console.log(`Você clicou no anúncio: ${ad.title}`);
    });

    announcementsList.appendChild(card);
    });
}

// Chamando as funções de exibição inicial
displayCategories();
displayAnnouncements('');

// Adicione eventos de busca (pode ser um evento de input ou clique em um botão)
// Exemplo com evento de input:
document.getElementById('search-input').addEventListener('enter', function(event) {
    const keyword = event.target.value;
    displayAnnouncements(keyword);
});