/* FUNCAO OVERLAY MENU-MOBILE */
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu');

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('abrir-menu')
})

/* FUNCAO ENVIO FORMULARIO */
const form = document.getElementById("formulario");
let nomeContato = document.getElementById("input-nome");
let emailContato = document.getElementById("input-mail");
let foneContato = document.getElementById("input-fone");
let msgContato = document.getElementById("input-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    let nomeContatoValor = nomeContato.value;
    let emailContatoValor = emailContato.value;
    let foneContatoValor = foneContato.value;
    let msgContatoValor = msgContato.value;

    if (!checkEmail(emailContatoValor)) {
        emailContato.classList.add("error"); //Adicione uma classe de erro ao elemento de email (pode ser estilizada com CSS)
        emailContato.nextElementSibling.textContent = "Por favor, insira um email válido.";
        console.log(teste01);
      }
}

function checkEmail(emailContatoValor) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        emailContatoValor
    );
}