/*Scripts validar formulário de registro no backend*/
let form = document.getElementById("login-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    let nome = document.getElementById("input-nome").value;
    let email = document.getElementById("input-email").value;
    let senha = document.getElementById("input-senha").value;
    let confirmSenha = document.getElementById("input-confirm-senha").value;

    let userData = {
        nickname: nome,
        email: email,
        password: senha,
        confirmPassword: confirmSenha
    };

    const request = await fetch('http://localhost:8081/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    const response = await request.json();
    switch (request.status) {
        case 409:
            alert('Usuário já cadastrado! Favor tente outro nome.');
            break;
        case 412:
            mensagemFeedback.innerHTML = "";
            for (let mensagem of response.errors) {
                mensagemFeedback.innerHTML += `<p>${mensagem}</p>`
            }
            break;
        case 201:
            alert('Usuário criado com sucesso!!!');
            break;
        default:
            break;
    }
});