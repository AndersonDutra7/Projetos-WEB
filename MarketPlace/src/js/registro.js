let form = document.getElementById("login-form");
let nome = document.getElementById("input-nome");
let email = document.getElementById("input-email");
let senha = document.getElementById("input-senha");
let confirmSenha = document.getElementById("input-confirm-senha");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    checkInputs();
});

async function checkInputs() {
    checkNome();
    checkEmail();
    checkSenha();
    checkConfirmSenha();

    const formControls = form.querySelectorAll(".form-control");
    const formIsValid = Array.from(formControls).every((formControl) => formControl.classList.contains("success"));

    // if (formIsValid) {
        // console.log("O formulário está 100% válido!");
        // Restante do código para enviar os dados para o backend
        
            let userData = {
                nickname: nome.value,
                email: email.value,
                password: senha.value,
                confirmPassword: confirmSenha.value,
            };

            console.log('userData:', userData);
    
            const request = await fetch('http://localhost:8081/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
            });
    
            // const response = request.json();
            const responseText = await request.text();
            const response = responseText ? JSON.parse(responseText) : {};
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
    // }
}

function checkNome() {
    let nomeValor = nome.value;
    if (nomeValor === "") {
        setErrorFor(nome, "O nome do usuário é obrigatório");
    } else {
        setSuccessFor(nome);
    }
}

function checkEmail() {
    let emailValor = email.value;
    if (emailValor === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!checkEmailFormat(emailValor)) {
        setErrorFor(email, "Por favor, insira um email válido.");
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
    } else if (!/[a-zA-Z]/.test(senhaValor) || !/\d/.test(senhaValor) || !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(senhaValor)) {
        setErrorFor(senha, "A senha deve conter pelo menos uma letra, um número e um caractere especial.");
    } else {
        setSuccessFor(senha);
    }
}

function checkConfirmSenha() {
    let confirmSenhaValor = confirmSenha.value;
    let senhaValor = senha.value;
    if (confirmSenhaValor === "") {
        setErrorFor(confirmSenha, "A confirmação de senha é obrigatória.");
    } else if (confirmSenhaValor !== senhaValor) {
        setErrorFor(confirmSenha, "As senhas não conferem.");
    } else {
        setSuccessFor(confirmSenha);
    }
}

function checkEmailFormat(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
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
