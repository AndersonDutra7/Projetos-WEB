document.getElementById("btn-login").addEventListener("click", function() {
    window.location.href = "html/login.html";
});

const registroForm = document.getElementById('login-form');

registroForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    if (senha !== confirmarSenha) {
        alert('As senhas não coincidem');
        return;
    }

    const registroUsuario = {
        nome: nome,
        email: email,
        senha: senha
    };

    fetch('http://localhost:8081/swagger-ui/index.html#/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(registroUsuario)
    })
    .then(response => {
        if (response.ok) {
            alert('Registro bem-sucedido! Você pode fazer login agora.');
                window.location.href = "html/login.html";
        } else {
            alert('Falha no registro. Tente novamente mais tarde.');
        }
    })
    .catch(error => {
        console.error('Erro ao enviar a solicitação POST:', error);
    });
});

const loginForm = document.getElementById('login-form');
        loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        const formData = new FormData();
        formData.append('email', email);
        formData.append('senha', senha);

        fetch('URL_DA_SUA_API_AQUI', {
            method: 'POST',
            body: formData
            })
        .then(response => response.json())
        .then(data => {
            console.log('Resposta da API:', data);
                // Faça algo com a resposta da API, como redirecionar o usuário ou exibir uma mensagem
        })
        .catch(error => {
            console.error('Erro ao enviar a solicitação POST:', error);
    });
});



