var itemsDoCarrinho = JSON.parse(localStorage.getItem("carrinho"))
const section = document.querySelector("section")

function renderizarCarrinho() {

    if (itemsDoCarrinho) {
        section.innerHTML = ''

        itemsDoCarrinho.map(element => {
            
            section.innerHTML += `
            
                <div id="item">
                    <p>${element.nome}</p>
                    <p>R$ ${element.preco},00</p>
             
                </div>

        `
        })
    } else {
        section.innerHTML = "<p>Seus produtos do carrinho aparecerão aqui :)</p>"
    }

}

renderizarCarrinho()




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

