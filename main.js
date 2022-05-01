/* animação das palavras */
var typed = new Typed(".auto-type", {
    strings: ["conectar.", "aventurar.", "desenvolver.", "comunicar.", "transformar."],
    typeSpeed: 110,
    backSpeed: 110,
    loop: true
});

/* customizando erros */
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener("submit", e => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (emailValue === '') {
        setErrorFor(email, 'Insira seu e-mail');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'E-mail inválido');
    } else {
        setSucessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Insira sua senha');
    } else {
        setSucessFor(password);
    }

    if (emailValue !== '' && isEmail(emailValue) && passwordValue !== '') {
        window.location.reload();
        alert("Login realizado com sucesso! 🚀")
    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSucessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}