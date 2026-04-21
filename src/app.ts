const proverbes: string[] = [
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
]

const cookieUn: any = document.querySelector('.cookie1')
const cookieDeux: any = document.querySelector('.cookie2')
const cookieBox: any = document.querySelector('#cookieBox')
const sms: any = document.querySelector('.sms')
const title: any = document.querySelector('h2')

cookieBox.addEventListener('click', (e: any) => {
    if (e.target == cookieUn) {
        const proverbe = proverbes[Math.floor(Math.random() * proverbes.length)]
        sms.querySelector('p').textContent = proverbe

        cookieUn.classList.toggle('desactive')
        cookieDeux.classList.toggle('active')
        sms.classList.toggle('activesms')
        title.classList.toggle('desactive')
    }
})


