// import setErrorFor from "./register.js";

let form = document.getElementById("login-form");
let email = document.getElementById("input-email");
let password = document.getElementById("input-senha");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    let emailValue = email.value;
    let passwordValue = password.value;

    if (!emailValue || !passwordValue) {
        if (!emailValue) setErrorFor(email,'O campo de email é obrigatório.');
        if (!passwordValue) setErrorFor(password, 'O campo de senha é obrigatório.');
    } else {
        let loginData = {
            email: email.value,
            password: password.value,
        };    

        const request = await fetch('http://localhost:8081/auth/login', {
            method: 'POST',
            headers: {
        'Content-Type': 'application/json'
        },
            body: JSON.stringify(loginData)
        });
    }

    // const responseText = await request.text();
    // const response = responseText ? JSON.parse(responseText) : {};
    // switch (request.status) {
    //     case 500:
    //         for (let mensagem of response.errors) {
    //             alert(mensagem)
    //         }
    //         break;
    //     case 412:
    //         for (let mensagem of response.errors) {
    //             alert(mensagem)
    //         }
    //         break;
    //     case 401:
    //         setErrorFor(email, response.message);
    //         break;
    //     case 200:
    //         alert(response.message);
    //         window.location.href = "../index.html";
    //         break;
    //     default:
    //         break;
    //     }
});

function checkEmail() {
    let emailValor = email.value;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailValor === "") {
        setErrorFor(email, "O email é obrigatório.");
    } else if (!emailValor.includes('@')) {
        setErrorFor(email, "O email deve conter o caractere '@'.");
    } else if (!emailRegex.test(emailValor)){
        setErrorFor(email, "Formato de email inválido.");
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    formControl.classList.remove("success");
    formControl.classList.add("error");
    small.innerText = message;
}