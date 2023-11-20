/*Scripts para o index ir ao login*/
document.getElementById("btn-login").addEventListener("click", function() {
    window.location.href = "html/login.html";
});

let userLoggedIn = false;
document.getElementById("btn-anunciar").addEventListener("click", function() {
            if (userLoggedIn) {
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