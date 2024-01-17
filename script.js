const form = document.getElementById('form');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('password2');

function showInputError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-input error animate__animated animate__headShake';
    const small = formControl.querySelector('small');
    small.innerHTML = message;
    setTimeout( function () {
        formControl.className = 'form-input error';
    }, 500);
}

function showInputSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-input success animate__animated animate__bounceIn ';
}

function checkEmailValidity(input) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regex.test(input.value)) {
        showInputSuccess(input);
    }else{
        showInputError(input, 'EMail is not valid')
    }
}