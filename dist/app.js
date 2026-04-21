"use strict";
const proverbes = [
    "La vie est ce qui arrive quand on est occupé à faire d'autres projets.",
    "Le voyage de mille lieues commence par un premier pas.",
    "Celui qui déplace une montagne commence par enlever les petites pierres.",
    "L'échec est le fondement de la réussite.",
    "Mieux vaut allumer une bougie que maudire l'obscurité.",
    "La sagesse commence dans l'émerveillement.",
    "Connais-toi toi-même.",
    "Ce que tu es est ce que tu fais à plusieurs reprises.",
    "La simplicité est la sophistication suprême.",
    "Les obstacles sont ces choses effrayantes que tu vois quand tu détournes les yeux de ton objectif.",
    "La chance sourit aux audacieux.",
    "Chaque jour est une nouvelle chance de changer ta vie.",
    "Le meilleur moment pour planter un arbre, c'était il y a 20 ans. Le deuxième meilleur moment, c'est maintenant.",
    "La créativité, c'est l'intelligence qui s'amuse.",
    "Fais de ta vie un rêve, et d'un rêve une réalité.",
];
/* ── Stars canvas ────────────────────────────────────────────── */
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
const stars = [];
function initStars() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars.length = 0;
    const count = Math.floor((canvas.width * canvas.height) / 4000);
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 1.2 + 0.2,
            phase: Math.random() * Math.PI * 2,
            speed: 0.003 + Math.random() * 0.006,
        });
    }
}
function drawStars(t) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
        const alpha = 0.15 + 0.7 * (0.5 + 0.5 * Math.sin(s.phase + t * s.speed));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${alpha})`;
        ctx.fill();
    }
    requestAnimationFrame(drawStars);
}
initStars();
window.addEventListener('resize', initStars);
requestAnimationFrame(drawStars);
/* ── Cookie interaction ──────────────────────────────────────── */
const cookieUn = document.querySelector('.cookie1');
const cookieDeux = document.querySelector('.cookie2');
const sms = document.querySelector('.sms');
const hint = document.querySelector('.hint');
const stage = document.querySelector('.cookie-stage');
const fortuneText = document.getElementById('fortune-text');
const replayBtn = document.getElementById('replayBtn');
function typewrite(el, text, speed = 28) {
    el.textContent = '';
    let i = 0;
    const tick = () => {
        if (i < text.length) {
            el.textContent += text[i++];
            setTimeout(tick, speed);
        }
    };
    tick();
}
function openCookie() {
    const proverbe = proverbes[Math.floor(Math.random() * proverbes.length)];
    cookieUn.style.animation = 'cookie-open 0.5s ease forwards';
    setTimeout(() => {
        cookieUn.classList.add('desactive');
        cookieDeux.classList.add('active');
        hint.classList.add('desactive');
        stage.style.opacity = '0';
        stage.style.transform = 'scale(0.95)';
        stage.style.transition = 'opacity 0.4s, transform 0.4s';
        setTimeout(() => {
            stage.style.display = 'none';
            sms.classList.add('activesms');
            typewrite(fortuneText, proverbe);
        }, 400);
    }, 350);
}
function resetCookie() {
    sms.classList.remove('activesms');
    cookieUn.classList.remove('desactive');
    cookieDeux.classList.remove('active');
    hint.classList.remove('desactive');
    cookieUn.style.animation = '';
    cookieDeux.style.display = 'none';
    fortuneText.textContent = '';
    stage.style.display = '';
    stage.style.opacity = '1';
    stage.style.transform = 'translateY(0)';
}
cookieUn.addEventListener('click', openCookie);
replayBtn.addEventListener('click', resetCookie);
