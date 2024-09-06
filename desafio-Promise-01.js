const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo){
    console.log(conteudo.toString());
}

function exibindoConteudo(){
    return new Promise(resolve => {
        fs.readFile(caminho, exibirConteudo)
        fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
        resolve()
    })
}

exibindoConteudo()
    .then(() => console.log('Inicio da Leitura...'))