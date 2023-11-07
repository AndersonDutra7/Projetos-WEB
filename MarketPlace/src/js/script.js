document.getElementById("btn-login").addEventListener("click", function() {
    window.location.href = "html/login.html";
});

/*Scripts registro.html*/

const registroForm = document.getElementById('login-form');
const nomeUsuario = document.getElementById('input-nome').value;
const emailUsuario = document.getElementById('input-email').value;
const senhaUsuario = document.getElementById('input-senha').value;
const confirmarSenhaUsuario = document.getElementById('input-confirmSenha').value;

registroForm.addEventListener('submit', (event) => {
    event.preventDefault();
});

function checkInputs() {
    const nomeUsuarioValor = nomeUsuario.value;
    const emailUsuarioValor = emailUsuario.value;
    const senhaUsuarioValor = senhaUsuario.value;
    const confirmarSenhaUsuarioValor = confirmarSenhaUsuario.value;

  if (nomeUsuarioValor === "") {
    setErrorFor(nomeUsuario, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(nomeUsuario);
  }

  if (emailUsuarioValor === "") {
    setErrorFor(emailUsuario, "O email é obrigatório.");
  } else if (!checkEmail(emailUsuarioValor)) {
    setErrorFor(emailUsuario, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(emailUsuario);
  }

  if (senhaUsuarioValor === "") {
    setErrorFor(senhaUsuario, "A senha é obrigatória.");
  } else if (senhaUsuarioValor.length < 7) {
    setErrorFor(senhaUsuario, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(senhaUsuario);
  }

  if (confirmarSenhaUsuarioValor === "") {
    setErrorFor(confirmarSenhaUsuario, "A confirmação de senha é obrigatória.");
  } else if (confirmarSenhaUsuarioValor !== senhaUsuarioValor) {
    setErrorFor(conferirSenha, "As senhas não conferem.");
  } else {
    setSuccessFor(conferirSenha);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
