const fname = document.querySelector('#first-name');
const lname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('password');
const btn = document.querySelector('#btn');

btn.addEventListener ('submit', function(e) {
    e.preventDefault();
    const errorIcon = document.querySelector('.error-icon');
    const errorLine = document.querySelector('.para');
    let firstName = fname.value;
    let lastName = lname.value;
    let eMail = email.value;
    let passWord = password.value;
    if (firstName = '') {
        errorIcon.style.display = 'flex';
        errorLine.style.display = 'block';
    }
})