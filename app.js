'use strict'

const infos = [
    {
        titulo: "resident evil 2",
        genero: "Survivar horror, adventure, puzzle, first person shooter",
        fundo: "0_a0efVrqAXXeL8uZC.gif",
        fonte: "'Courier New', Courier, monospace"
    },
    {
        titulo: "horizon chase turbo",
        genero: "Indie, racing, action, casual, sports",
        fundo: "213804.gif",
        fonte: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"
    },
    {
        titulo: "celeste",
        genero: "Platform, adventure",
        fundo: "celeste.gif",
        fonte: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif"
    },
    {
        titulo: "gta v",
        uppercase_title: true,
        genero: "Third person shooter, action, adventure, non-linear",
        fundo: "35a1dca8d52b5583da0773e8a5b01fd6.gif",
        fonte: "fantasy",
    },
    {
        titulo: "Papa's Pizzaria",
        genero: "Cullinary",
        fundo: "papa.gif",
        fonte: "cursive"
    }
    
]

function criarCard(infos) {
    const containerGeral = document.getElementById('container')
    containerGeral.classList.add('container')

    const jogo = document.createElement('div')
    jogo.id = 'teste'
    jogo.classList.add('jogo')
    jogo.style.backgroundImage = `url(./content/${infos.fundo})`
    jogo.style.fontFamily = infos.fonte

    const content = document.createElement('div')
    content.classList.add('content')
    content.classList.add('hover')


    const nome = document.createElement('h2')
    nome.textContent = infos.titulo
    if(infos.uppercase_title){
        nome.style.textTransform = "uppercase"
    } else {
        nome.style.textTransform = "capitalize"
    }

    const genero = document.createElement('p')
    genero.textContent = infos.genero

    content.replaceChildren(nome,genero)
    jogo.replaceChildren(content)
    containerGeral.appendChild(jogo)
}


infos.forEach(criarCard)

function clicar() {
    alert('CLICADO')
}

function passarMouse(div){
    alert('sla')
}
