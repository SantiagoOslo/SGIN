document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);
document.getElementById("btn__registrarse").addEventListener("click", register);
window.addEventListener("resize", anchopagina);



// Declaracion de variables
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var caja__trasera_login = document.querySelector(".caja__trasera-login");
var caja__trasera_register = document.querySelector(".caja__trasera-register");
var cajaTrasera = document.querySelector('.caja__trasera'); 
var activeForm = "login";

anchopagina();

function anchopagina() {
    if (window.innerWidth > 850) {
        caja__trasera_login.style.display = "block";
        caja__trasera_register.style.display = "block";
        cajaTrasera.style.background = 'linear-gradient(to right, rgba(0, 135, 240, 0.7) 48%, rgba(0, 135, 240, 0.7) 49%, rgba(174, 75, 86, 0.7) 51%, rgba(174, 75, 86, 0.7) 52%)';
        
        if (activeForm === "login") {
            formulario_register.style.display = "none";
            formulario_login.style.display = "block";
            contenedor_login_register.style.left = "10px";
            caja__trasera_register.style.opacity = "1";
            caja__trasera_login.style.opacity = "0";
        } else {
            formulario_register.style.display = "block";
            formulario_login.style.display = "none";
            contenedor_login_register.style.left = "410px";
            caja__trasera_register.style.opacity = "0";
            caja__trasera_login.style.opacity = "1";
        }
    } else {
        caja__trasera_register.style.display = "block";
        caja__trasera_register.style.opacity = "1";
        caja__trasera_login.style.display = "none";
        contenedor_login_register.style.left = "0px";
        if (formulario_login.style.display === "block") {
            caja__trasera_register.style.display = "block";
            caja__trasera_login.style.display = "none";
            cajaTrasera.style.background = 'rgba(174, 75, 86, 0.7)';
        } else {
            caja__trasera_register.style.display = "none";
            caja__trasera_login.style.display = "block";
            cajaTrasera.style.background = 'rgba(0, 135, 240, 0.7)';
        }
        
    }
}


function iniciarSesion() {
    activeForm = "login";
    if (window.innerWidth > 850) {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "10px";
        formulario_login.style.display = "block";
        caja__trasera_register.style.opacity = "1";
        caja__trasera_login.style.opacity = "0";
    } else {
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "block";
        caja__trasera_register.style.display = "block";
        caja__trasera_login.style.display = "none";
        cajaTrasera.style.background = 'rgba(174, 75, 86, 0.7)';
    }
}

function register() {
    activeForm = "register"; 
    if (window.innerWidth > 850) {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "410px";
        formulario_login.style.display = "none";
        caja__trasera_register.style.opacity = "0";
        caja__trasera_login.style.opacity = "1";
    } else {
        formulario_register.style.display = "block";
        contenedor_login_register.style.left = "0px";
        formulario_login.style.display = "none";
        caja__trasera_register.style.display = "none";
        caja__trasera_login.style.display = "block";
        caja__trasera_login.style.opacity = "1";
        cajaTrasera.style.background = 'rgba(0, 135, 240, 0.6)';
    }
}


