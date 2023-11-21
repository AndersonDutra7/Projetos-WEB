/*Scripts para o index ir ao login*/
document.getElementById("btn-login").addEventListener("click", function() {
    window.location.href = "html/login.html";
});

// Função para verificar se o usuário está logado com base
function isUserLoggedIn() {
  const authToken = localStorage.getItem('authToken');
  return !!authToken;
}

//Script para ir a pagina de anunciar
document.getElementById("btn-anunciar").addEventListener("click", function() {
            if (isUserLoggedIn()) {
                window.location.href = "html/announcement.html";
            } else {
                window.location.href = "html/login.html";
            }
});

//Script para rodar o carroussel
const inputRadios = document.querySelectorAll('input[name="btn-radio"]');
const totalImages = 3;
let counter = 1;

inputRadios[counter - 1].checked = true;

setInterval(nextImg, 5000);

function nextImg() {
    counter = (counter % totalImages) + 1;
    inputRadios[counter - 1].checked = true;
}

//Script para realizar consultar no input
function searchAnnouncements() {
    let searchTerm = document.getElementById('search-input').value.toLowerCase();
    console.log(searchTerm);
    let matchingAnnouncements = announcementsData.filter(ad => ad.title.toLowerCase().includes(searchTerm));
    console.log(matchingAnnouncements);

    if (matchingAnnouncements.length > 0) {
        window.location.href = "html/login.html";
      window.location.href = `announcement.html?id=${matchingAnnouncements[0].id}`;
    } else {
      alert('Nenhum anúncio encontrado.');
    }
  }

//Script para atualziar token
async function refreshToken() {
  console.log('refreshToken');
//   const refreshToken = localStorage.getItem('refreshToken');

  // if (!refreshToken) {
  //     alert("Sua sessão expirou, faça login novamente.");
  //     return;
  // }

  // const refreshRequest = await fetch('http://localhost:8081/auth/refresh', {
  //     method: 'POST',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${refreshToken}`
  //     },
  // });

  // if (refreshRequest.ok) {
  //     const newAccessToken = await refreshRequest.json().then(data => data.accessToken);
  //     localStorage.setItem('authToken', newAccessToken);
      // Continue a execução após renovar o token
  //     alert("Token renovado com sucesso. Continue a operação.");
  // } else {
      // Manipule erros, como revogar o refresh token se inválido
      // alert("Erro ao renovar o token. Faça login novamente.");
      // Redirecionar para a página de login
//       window.location.href = "html/login.html";
//   }
}

// Função para mostrar a div avatar com base no status de login
function toggleAvatarVisibility() {
  const userAvatar = document.getElementById('user-avatar');
  const btnLOgin = document.getElementById('btn-login');
  if (isUserLoggedIn()){
    userAvatar.style.display = 'block';
    btnLOgin.style.display = 'none';
  }
}

// Chama a função para mostrar ou ocultar a div avatar ao carregar a página
window.addEventListener('load', async () => {
  // Atualiza o token antes de verificar a visibilidade
  await refreshToken();
  toggleAvatarVisibility();
});

//Script para realizar busca de anúncios
function searchAnnouncements() {
  const searchInput = document.getElementById('search-input');

  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') { // Verifica se a tecla pressionada é Enter
      console.log('enter ok');
      const keyword = event.target.value.toLowerCase(); // Converte para minúsculas para corresponder sem distinção entre maiúsculas e minúsculas

      // Verifica se a keyword está presente no array announcementsData
      if (announcementsData.includes(keyword)) {
        displayAnnouncements(keyword);
        console.log('acessar api de anuncios');
      } else {
        document.getElementById('no-results-message').style.display = 'block';
      }
    }
  });
}
