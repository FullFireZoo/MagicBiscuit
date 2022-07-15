const cookieUn: any= document.querySelector('.cookie1')
const cookieDeux: any= document.querySelector('.cookie2')
const cookieBox: any= document.querySelector('#cookieBox')
const sms:any= document.querySelector('.sms')
const title:any= document.querySelector('h2')

cookieBox.addEventListener('click',(e: any)=>{
    if(e.target==cookieUn){
        console.log(e.target)
        cookieUn.classList.toggle('desactive')
        cookieDeux.classList.toggle('active')
        sms.classList.toggle('activesms')
        title.classList.toggle('desactive')
    }
    
})


