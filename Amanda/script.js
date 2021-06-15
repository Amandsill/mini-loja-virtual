let quantidadeDeitensDoCarrinho = 0
var renderCarrinho = document.querySelector(".quantidade")

if (localStorage.getItem('contadorCarrinho')) {
    console.log(localStorage.getItem('contadorCarrinho'))
    renderCarrinho.innerHTML = localStorage.getItem('contadorCarrinho');
    quantidadeDeitensDoCarrinho = Number(localStorage.getItem('contadorCarrinho'));
}
renderCarrinho = localStorage.getItem('contadorCarrinho')



const mostrarEndereco = document.querySelector('#cidade')

if (localStorage.getItem("endereco")) {
    mostrarEndereco.innerHTML = localStorage.getItem("endereco")

} else {
    mostrarEndereco.innerHTML = "Adicionar endereço de entrega"

}





const sapatos = [
    {
        id: 0,
        nome: "Sapato 1",
        img: "assets/sapatos/1.jpeg",
        quantidade: 0,
        preco: 80
    },

    {
        id: 1,
        nome: "Sapato 2",
        img: "assets/sapatos/2.jpeg",
        quantidade: 0,
        preco: 80
    },

    {
        id: 2,
        nome: "Sapato 3",
        img: "assets/sapatos/3.jpeg",
        quantidade: 0,
        preco: 100
    },
    {
        id: 2,
        nome: "Sapato 4",
        img: "assets/sapatos/3.jpeg",
        quantidade: 0,
        preco: 100
    }
]

const shorts = [
    {
        id: 0,
        nome: "Short 1",
        img: "assets/shorts/image2.jpeg",
        quantidade: 0,
        preco: 20.00
    },
    {
        id: 1,
        nome: "Short 2",
        img: "assets/shorts/image3.jpeg",
        quantidade: 0,
        preco: 20.00
    },
    {
        id: 2,
        nome: "Short 3",
        img: "assets/shorts/image2.jpeg",
        quantidade: 0,
        preco: 20.00
    },

]


const calcas = [
    {
        id: 0,
        nome: "Calça 1",
        img: "assets/calcas/image1.jpeg",
        quantidade: 0,
        preco: 20.00
    },
    {
        id: 1,
        nome: "Calça 2",
        img: "assets/calcas/image2.jpeg",
        quantidade: 0,
        preco: 20.00
    },
    {
        id: 2,
        nome: "Calça 3",
        img: "assets/calcas/image3.jpeg",
        quantidade: 0,
        preco: 20.00
    },

]



const salopetes = [
    {
        id: 0,
        nome: "Salopete 1",
        img: "assets/salopetes/image1.jpeg",
        quantidade: 0,
        preco: 20.00
    },
    {
        id: 1,
        nome: "Salopete 2",
        img: "assets/salopetes/image2.jpeg",
        quantidade: 0,
        preco: 20.00
    },
    {
        id: 2,
        nome: "Salopete 3",
        img: "assets/salopetes/image1.jpeg",
        quantidade: 0,
        preco: 20.00
    },

]

inicializarLoja = (produto) => {
    var containerProdutos = document.getElementById('produtos');
    containerProdutos.innerHTML = ''
    produto.map((val) => {
        containerProdutos.innerHTML += `

        <div class="produto-single">
            <img src="`+ val.img + `" />
            <p>`+ val.nome + `</p>
            <p>R$ `+ val.preco + `,00</p>
            <a class="adicionar" key="`+ val.id + `" href="#"> Adicionar ao carrinho</a>
        </div>
            
        `
    })
}

const aba = localStorage.getItem('aba')
console.log(aba)
if (aba) {
    if (aba == "sapatos") {
        inicializarLoja(sapatos)
        setarLinknoProduto(sapatos)

    }
    if (aba == "calcas") {
        inicializarLoja(calcas)
        setarLinknoProduto(calcas)

    }
    if (aba == "salopetes") {
        inicializarLoja(salopetes)
        setarLinknoProduto(salopetes)

    }
    if (aba == "shorts") {
        inicializarLoja(shorts)
        setarLinknoProduto(shorts)

    }
} else {
    inicializarLoja(shorts);
    setarLinknoProduto(shorts)


}




const sapatosButton = document.querySelector('#sapatosButton')

sapatosButton.addEventListener('click', () => {
    inicializarLoja(sapatos)
    setarLinknoProduto(sapatos)
    localStorage.setItem("aba", "sapatos")

})


const shortsButton = document.querySelector('#shortsButton')

shortsButton.addEventListener('click', () => {
    inicializarLoja(shorts)
    setarLinknoProduto(shorts)
    localStorage.setItem("aba", "shorts")

})


const calcasButton = document.querySelector('#calcasButton')

calcasButton.addEventListener('click', () => {
    inicializarLoja(calcas)
    setarLinknoProduto(calcas)
    localStorage.setItem("aba", "calcas")
})


const salopetesButton = document.querySelector('#salopetesButton')

salopetesButton.addEventListener('click', () => {
    inicializarLoja(salopetes)
    setarLinknoProduto(salopetes)
    localStorage.setItem("aba", "salopetes")

})





atualizarCarrinho = (item) => {
    quantidadeDeitensDoCarrinho += 1

    const items = [item]
    console.log(item)

    if (JSON.parse(localStorage.getItem("carrinho"))) {
        const localstorage = JSON.parse(localStorage.getItem("carrinho"))

        for (i = 0; i < localstorage.length; i++) {
            items.push(localstorage[i])

        }
        console.log(localstorage)

    }


    // console.log(items)
    localStorage.setItem("carrinho", JSON.stringify(items))

    localStorage.setItem("contadorCarrinho", quantidadeDeitensDoCarrinho)

    document.querySelector(".quantidade").innerHTML = quantidadeDeitensDoCarrinho

}



function setarLinknoProduto(produto) {
    var links = document.getElementsByTagName('a')

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function (event) {
            let key = this.getAttribute('key');
            produto[key].quantidade++;
            atualizarCarrinho(produto[key])

            event.preventDefault()
        })

    }
}





//Menu retrátil

const menuButton = document.querySelector('#menuButton')
const navBarr = document.querySelector('.navbar')

menuButton.addEventListener('click', function () {
    navBarr.classList.toggle('mostrar-navbar') 
})




