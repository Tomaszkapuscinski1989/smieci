
////////////////////////////////////////////////////////
const nav = document.getElementById('nav')
const menu = document.getElementsByClassName('menu')

menu[0].addEventListener('click', () => {
    nav.classList.toggle('hiden')
})