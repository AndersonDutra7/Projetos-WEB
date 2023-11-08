// document.getElementById("btn-login").addEventListener("click", function() {
//     window.location.href = "html/login.html";
// });

/*Scripts registro.html*/
let form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let nome = document.getElementById("input-nome").value;
  let email = document.getElementById("input-email").value;
  let senha = document.getElementById("input-senha").value;
  let confirmSenha = document.getElementById("input-confirm-senha").value;
  
  let userData = JSON.stringify({
    nome: nome,
    email: email,
    senha: senha,
    confirmSenha: confirmSenha
  });

  fetch('http://localhost:8081/swagger-ui/index.html#/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(userData)
})
.then(response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Erro na requisição POST: ' + response.statusText);
  }
})
.then(data => {
  // Lida com a resposta da API, por exemplo, exibindo uma mensagem de sucesso ou erro
  if (data.success) {
    alert("Usuário cadastrado com sucesso!");
    // Redireciona para a página de login ou faz outra ação necessária
  } else {
    alert("Erro ao cadastrar o usuário. Tente novamente.");
  }
})
.catch(error => {
  console.error("Erro na requisição POST:", error);
  // Lida com erros na requisição
});
});

// console.log(userData);