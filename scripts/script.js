let conteiner = document.querySelector('.content-yes')
let msg = document.querySelector('.msg-content')
function active_yes(){
  msg.innerHTML = 'Ficamos felizes em ajudar. Diga-nos como podemos melhorar! '

  conteiner.style.display = 'block'
}

function active_no(){

  conteiner.style.display = 'none'
  conteiner.style.display = 'block'
  msg.innerHTML = 'Lamentamos não ter ajudado. Diga-nos como melhorar'

}

window.addEventListener('scroll', function(){
  let header = document.querySelector('header')
  let windowscrol = window.scrollY > 10; /*quando o window tiver rolado mais de 500 pixel no eixo y */
  header.classList.toggle('scrolling-active', windowscrol)
})


//BOTAO DE MENU 

let btnMobile = document.getElementById('btn-mobile')
let nav = document.getElementById('nav')
let body = document.querySelector('body')
function toggleMenu() {
  if (window.scrollY > 100) {
    nav.classList.toggle('active')
  } else {
    nav.classList.toggle('active2')
  }
  body.classList.toggle('hide')

}
btnMobile.addEventListener('click', toggleMenu)
function list() {
  nav.classList.remove('active')
  nav.classList.remove('active2')
  body.classList.toggle('hide')
}
