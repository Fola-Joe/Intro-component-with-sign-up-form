// const fname = document.querySelector('#first-name');
// const lname = document.querySelector('#last-name');
// const email = document.querySelector('#email');
const input = document.querySelectorAll('.input');
// const password = document.querySelector('password');
const btn = document.querySelector('#btn');
const errorIcon = document.querySelectorAll('.error-icon');
const errorLine = document.querySelectorAll('.para');

// function validateEmail (email) {
//     const err = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     return err.test(String(email).toLowerCase());
// }

function validity() {
    const fname = document.querySelector('#first-name');
    const lname = document.querySelector('#last-name');
    const email = document.querySelector('#email');
    const password = document.querySelector('password');

    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (fnameValue === '') {
        errorIcon[0].style.display = 'flex';
        errorLine[0].style.display = 'block';
    } else {
        errorIcon[0].style.display = 'none';
        errorLine[0].style.display = 'none';
    }
}

btn.addEventListener('click', (e) => {
    // e.preventDefault();
    validity();
})

// input[0].addEventListener('input', (e) => {
//     const value = e.target.value;
//     if (value.length <= 0) {
//         errorIcon.style.display = 'flex';
//         errorLine.style.display = 'block';
//     } else {
//         errorIcon.style.display = 'none';
//         errorLine.style.display = 'none';
//     }
// });







// btn.addEventListener ('submit', function(e) {
//     e.preventDefault();
//     let firstName = fname.value;
//     let lastName = lname.value;
//     let eMail = email.value;
//     let passWord = password.value;
//     if (firstName = '') {
//         errorIcon.style.display = 'flex';
//         errorLine.style.display = 'block';
//     }
// })