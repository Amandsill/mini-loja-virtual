var buttonSubmit = document.querySelector('#buscar')
var cep = document.querySelector('#cep')
var cidade = ''

buttonSubmit.addEventListener('click', () => {
    try {
        fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            if(confirm(`Quer salvar ${data.localidade} - ${data.uf} como seu endereço?`)) {
                const localidade = `${data.localidade} - ${data.uf}`
                localStorage.setItem("endereco", localidade)
                window.location.href = "../../index.html"

            }
        });
    } catch (err) {console.log(err.message)}
    
        
        // confirm("Deseja salvar", cidade, "como seu endereço?")

})


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


