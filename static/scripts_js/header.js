window.addEventListener('DOMContentLoaded', () => {

const hamburgerElem=document.querySelector('.hamburger-menu')
      menuElem=document.querySelector('.menu')
      closeElem=document.querySelector('.menu__close')

hamburgerElem.addEventListener('click', ()=>{
    menuElem.classList.add('active') 
})

closeElem.addEventListener('click', ()=>{
    menuElem.classList.remove('active')
})

})

