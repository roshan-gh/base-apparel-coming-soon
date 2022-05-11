const input = document.querySelector('.form__email');
const iconError = document.querySelector('.form__error-icon-box');

input.addEventListener('invalid', (e) => {
    iconError.style.visibility = 'visible';
})