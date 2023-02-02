const input = document.querySelectorAll('.input');
const inputDiv = document.querySelectorAll('.input-div');
const btn = document.querySelector('#btn');
const errorIcon = document.querySelectorAll('.error-icon');
const errorLine = document.querySelectorAll('.para');

function validity() {
    const fname = document.querySelector('#first-name');
    const lname = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    const err = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (fnameValue === '') {
        errorIcon[0].style.display = 'flex';
        errorLine[0].style.display = 'block';
        input[0].placeholder = '';
        input[0].style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        errorIcon[0].style.display = 'none';
        errorLine[0].style.display = 'none';
        input[0].style.border = '1px solid hsl(246, 25%, 77%)';
    }
    if (lnameValue === '') {
        errorIcon[1].style.display = 'flex';
        errorLine[1].style.display = 'block';
        input[1].placeholder = '';
        input[1].style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        errorIcon[1].style.display = 'none';
        errorLine[1].style.display = 'none';
        input[1].style.border = '1px solid hsl(246, 25%, 77%)';
    }
    if (emailValue === '') {
        errorIcon[2].style.display = 'flex';
        errorLine[2].style.display = 'block';
        input[2].placeholder = '';
        input[2].style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        errorIcon[2].style.display = 'none';
        errorLine[2].style.display = 'none';
        input[2].style.border = '1px solid hsl(246, 25%, 77%)';
    }
    if (emailValue.match(err)) {
        errorIcon[2].style.display = 'none';
        errorLine[2].style.display = 'none';
    } else {
        errorIcon[2].style.display = 'flex';
        errorLine[2].style.display = 'block';
        input[2].style.border = '2px solid hsl(0, 100%, 74%)';
        input[2].placeholder = 'email@example/com';
        input[2].placeholder.style.color = 'hsl(0, 100%, 74%)';
    }
    if (passwordValue === '') {
        errorIcon[3].style.display = 'flex';
        errorLine[3].style.display = 'block';
        input[3].placeholder = '';
        input[3].style.border = '2px solid hsl(0, 100%, 74%)';
    } else {
        errorIcon[3].style.display = 'none';
        errorLine[3].style.display = 'none';
        input[3].style.border = '1px solid hsl(246, 25%, 77%)';
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    validity();
})