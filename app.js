'use strict'

let infos = [
    {
        id: 1,
        titulo: "resident evil 2",
        genero: "Survivar horror, adventure, puzzle, first person shooter",
        fundo: "0_a0efVrqAXXeL8uZC.gif",
        fonte: 1
    },
    {
        id: 2,
        titulo: "horizon chase turbo",
        genero: "Indie, racing, action, casual, sports",
        fundo: "213804.gif",
        fonte: 2
    },
    {
        id: 3,
        titulo: "celeste",
        genero: "Platform, adventure",
        fundo: "celeste.gif",
        fonte: 3
    },
    {
        id: 4,
        titulo: "gta v",
        uppercase_title: true,
        genero: "Third person shooter, action, adventure, non-linear",
        fundo: "35a1dca8d52b5583da0773e8a5b01fd6.gif",
        fonte: 4
    },
]

infos.push({
    id: 5,
    titulo: "Papa's Pizzaria",
    genero: "Cullinary",
    fundo: "papa.gif",
    fonte: 5
},
{
    id: 6,
    titulo: "Life Is Strange",
    genero: "Action, Interactive Film",
    fundo: "lis.gif",
    fonte: 7
}
)

function criarCard(infos) {
    const containerGeral = document.getElementById('container')
    containerGeral.classList.add('container')

    const jogo = document.createElement('div')
    jogo.id = 'teste'
    jogo.classList.add('jogo')
    jogo.style.backgroundImage = `url(./content/${infos.fundo})`
    if(infos.fonte==0){
        jogo.classList.add('arial')
    }
    if(infos.fonte==1){
        jogo.classList.add('courier')
    }
    if(infos.fonte==2){
        jogo.classList.add('franklin')
    }
    if(infos.fonte==3){
        jogo.classList.add('trebuchet')
    }
    if(infos.fonte==4){
        jogo.classList.add('fantasy')
    }
    if(infos.fonte==5){
        jogo.classList.add('cursive')
    }
    if(infos.fonte==6){
        jogo.classList.add('cedarville')
    }
    if(infos.fonte==7){
        jogo.classList.add('dudu')
    }
    

    const content = document.createElement('div')
    content.classList.add('content')
    content.classList.add('hover')


    const nome = document.createElement('h2')
    nome.textContent = infos.titulo
    if (infos.uppercase_title) {
        nome.style.textTransform = "uppercase"
    } else {
        nome.style.textTransform = "capitalize"
    }

    const genero = document.createElement('p')
    genero.textContent = infos.genero

    content.replaceChildren(nome, genero)
    jogo.replaceChildren(content)
    containerGeral.appendChild(jogo)
}
function mensagem(){
    alert("O upload de imagens não está funcionando no momento :(")
}
const uploadContainer = document.getElementById('uploadContainer') 
uploadContainer.addEventListener('click', mensagem)

infos.forEach(criarCard)

const registrarBotao = document.getElementById('registrar')
const closePanel = document.getElementById('botaoFecharPainel')
closePanel.addEventListener('click',fecharPainel)
const painelRegistro = document.getElementById('painelRegistro')
function abrirPainel() {
    painelRegistro.style.visibility = 'visible'
}


function fecharPainel(){
    painelRegistro.style.visibility = 'hidden'
}
async function registrar() {
    const tituloDigitado = document.getElementById('titulo').value;
    const generoDigitado = document.getElementById('genero').value;
    const fonteEscolhida = document.getElementById('font-select').value
    const info = {
        titulo: tituloDigitado,
        genero: generoDigitado,
        fundo: "default.gif",
        fonte: fonteEscolhida
    }

if(tituloDigitado == "" || generoDigitado == "" || fonteEscolhida == null){
    alert("Preencha todos os campos")
} else {
    console.log(info)
    painelRegistro.style.visibility = 'hidden'
    criarCard(info)
}
document.getElementById('titulo').textContent == "";
document.getElementById('titulo').value == "";

}
const registrarBotaoPainel = document.getElementById('concluirRegistro')
registrarBotaoPainel.addEventListener('click', registrar)