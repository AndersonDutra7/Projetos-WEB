const login = async () => {
    const response = await fetch('http://localhost:8081/swagger-ui/index.html#/auth/confirmAccount')
    const data = await response.json()
    console.log(data);
}

const uploadADS = () => {}


window.onload = () => {
    // uploadADS();

    // const btn-register = document.getElementById('btn-register')
    // btn-register.onclick = newUser();
    console.log("iniciado");

};
