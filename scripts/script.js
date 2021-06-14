let conteiner = document.querySelector('.content-yes')
let msg = document.querySelector('.msg-content')

//Funções para mudar mensagem do input 
function active_yes(){
  msg.innerHTML = 'Ficamos felizes em ajudar. Diga-nos como podemos melhorar! '

  conteiner.style.display = 'block'
}

function active_no(){

  conteiner.style.display = 'none'
  conteiner.style.display = 'block'
  msg.innerHTML = 'Lamentamos não ter ajudado. Diga-nos como melhorar'

}
/**/

//Função para o rolamento do mouse mudar o estilo do header 
window.addEventListener('scroll', function(){
  let header = document.querySelector('header')
  let windowscrol = window.scrollY > 10; /*quando o window tiver rolado mais de 10 pixel no eixo y */
  header.classList.toggle('scrolling-active', windowscrol) // alterne a função scrolling-active no header
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
