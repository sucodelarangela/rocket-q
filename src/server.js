// Importar o express que acabamos de instalar e que está na pasta node_modules>express
const express = require('express')
const route = require('./route') // Importa o módulo de rotas
const path = require('path') // Módulo do express
const port = process.env.PORT || 3000 // Config para rodar no deploy, indica que deve ser processada a porta do environment ou a 3000

// Criar um server
const server = express()

server.set('view engine', 'ejs') // Diz ao express que nossa view engine é o ejs

server.use(express.static('public')) // Usa o conteúdo estático na pasta 'public'

// Por padrão, a pasta "views" (que contém o arquivo 'index.ejs') ficaria na raiz do projeto. Como em nosso projeto ela está dentro da pasta 'src', devemos indicar isso para o express:
// A pasta 'views' estará dentro de um diretório qualquer (__dirname)e o 'join' une o nome do diretório à pasta 'views'
server.set('views', path.join(__dirname, 'views'))

// Pega o conteúdo que vem do formulário, decodifica e manda para o controller (esse é o midware)
server.use(express.urlencoded({extended: true}))

server.use(route) // Usa o módulo de rotas

// Iniciar o servidor numa determinada porta, no nosso caso, porta 3000
server.listen(port, () => console.log('RODANDO'))
