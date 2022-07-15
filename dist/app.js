"use strict";
const cookieUn = document.querySelector('.cookie1');
const cookieDeux = document.querySelector('.cookie2');
const cookieBox = document.querySelector('#cookieBox');
const sms = document.querySelector('.sms');
const title = document.querySelector('h2');
cookieBox.addEventListener('click', (e) => {
    if (e.target == cookieUn) {
        console.log(e.target);
        cookieUn.classList.toggle('desactive');
        cookieDeux.classList.toggle('active');
        sms.classList.toggle('activesms');
        title.classList.toggle('desactive');
    }
});
