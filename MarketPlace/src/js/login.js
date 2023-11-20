let loginForm = document.getElementById("login-form");
let email = document.getElementById("input-email");
let senha = document.getElementById("input-senha");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    await checkInputs();
});

async function checkInputs() {
    checkEmail();
    checkSenha();

    const formControls = loginForm.querySelectorAll(".form-control");
    const formIsValid = Array.from(formControls).every((formControl) => formControl.classList.contains("success"));

    if (formIsValid) {
        let userData = {
            email: email.value,
            password: senha.value,
        };

        const request = await fetch('http://localhost:8081/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const responseText = await request.text();
        const response = responseText ? JSON.parse(responseText) : {};

        switch (request.status) {
            case 500:
                for (let mensagem of response.errors) {
                    alert(mensagem)
                }
                break;
            case 412:
                for (let mensagem of response.errors) {
                    alert(mensagem)
                }
                break;
            case 401:
                alert(response.message);
                await refreshToken();
                break;
            case 200:
                const token = response.token;
                console.log(token);
                localStorage.setItem('authToken', token);
                window.location.href = "../index.html";
                break;
            default:
                break;
        }
    }
}

function checkEmail() {
    let emailValor = email.value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailValor === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!emailValor.includes('@')) {
        setErrorFor(email, "O email deve conter o caractere '@'.");
    } else if (!emailRegex.test(emailValor)) {
        setErrorFor(email, "Formato de email inválido.");
    } else {
        setSuccessFor(email);
    }
}

function checkSenha() {
    let senhaValor = senha.value;
    if (senhaValor === "") {
        setErrorFor(senha, "A senha é obrigatória.");
    } else if (senhaValor.length < 7 || senhaValor.length > 16) {
        setErrorFor(senha, "A senha deve ter entre 7 e 16 caracteres.");
    } else if (!/[a-zA-Z]/.test(senhaValor)) {
        setErrorFor(senha, "A senha deve conter pelo menos uma letra.");
    } else if (!/\d/.test(senhaValor)) {
        setErrorFor(senha, "A senha deve conter pelo menos um número.");
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senhaValor)) {
        setErrorFor(senha, "A senha deve conter pelo menos um caractere especial.");
    } else {
        setSuccessFor(senha);
    }
}


function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.classList.remove("error");
    formControl.classList.add("success");
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.classList.remove("success");
    formControl.classList.add("error");
    small.innerText = message;
}

async function refreshToken() {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
        alert("Sua sessão expirou, faça login novamente.");
        window.location.href = "../login.html";
        return;
    }

    const refreshRequest = await fetch('http://localhost:8081/auth/refresh', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${refreshToken}`
        },
    });

    if (refreshRequest.ok) {
        const newAccessToken = await refreshRequest.json().then(data => data.accessToken);
        localStorage.setItem('authToken', newAccessToken);
        // Continue a execução após renovar o token
        alert("Token renovado com sucesso. Continue a operação.");
    } else {
        // Manipule erros, como revogar o refresh token se inválido
        alert("Erro ao renovar o token. Faça login novamente.");
        // Redirecionar para a página de login
        window.location.href = "../login.html";
    }
}