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
        showInputError(input, 'EMail is not valid');
    }
}

function checkRequiredField(inputArr) {
    inputArr.forEach(function(input) {
        if (input.value.trim() === '') {
            showInputError(input, `${getFieldName(input)}` + ' is required');
        }else{
            showInputSuccess(input);
        }
    })
}

function checkInputLength(input, min, max) {
    if(input.value.length < min) {
        showInputError(
            input,
            `${getFielName(input)} must be at least ${min} characters`
        );
    }else if(input.value.length > max) {
        showInputError(
            input,
            `${getFielName(input)} must be less than ${max} characters`
        );
    }else{
        showInputSuccess(input);
    }
}

function checkUsername(input) {
    const user = /^[0-9a-zA-Z]+$/;
    if (!user.test(input.value)) {
        showInputError(input, 'Username can only contain letters or numbers');
    }
}