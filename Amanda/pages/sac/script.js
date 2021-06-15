const shorts = document.querySelector('#shortsButton')
const sapatos = document.querySelector('#sapatosButton')
const calcas = document.querySelector('#calcasButton')
const salopetes = document.querySelector('#salopetesButton')


shorts.addEventListener('click', () => {
    localStorage.setItem('aba', 'shorts')
    window.location.href = "../../index.html"
})


sapatos.addEventListener('click', () => {
    localStorage.setItem('aba', 'sapatos')
    window.location.href = "../../index.html"
})

calcas.addEventListener('click', () => {
    localStorage.setItem('aba', 'calcas')
    window.location.href = "../../index.html"
})

salopetes.addEventListener('click', () => {
    localStorage.setItem('aba', 'salopetes')
    window.location.href = "../../index.html"
})


//Menu retrátil

const menuButton = document.querySelector('#menuButton')
const navBarr = document.querySelector('.navbar')

menuButton.addEventListener('click', function () {
    navBarr.classList.toggle('mostrar-navbar') 
})


