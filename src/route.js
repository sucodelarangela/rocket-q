// Importar o express que acabamos de instalar e que está na pasta node_modules>express
const express = require('express')

// Criar variável de rota
const route = express.Router()

// Pegar as rotas
// Quando o domínio terminar em '/', renderiza na tela o arquivo index (que antes era html e agora é ejs)
route.get('/', (req, res) => res.render('index'))
// Quando o domínio terminar em '/room', renderiza na tela o arquivo room (que antes era html e agora é ejs)
route.get('/room', (req, res) => res.render('room'))
// Quando o domínio terminar em '/create-pass', renderiza na tela o arquivo create-pass (que antes era html e agora é ejs)
route.get('/create-pass', (req, res) => res.render('create-pass'))
// Precisamos criar uma rota para quando fizermos determinadas ações na sala de perguntas. Por exemplo, temos que criar uma rota para o número da sala, dentro dessa precisamos identificar o número da pergunta e que ação foi tomada. Quando queremos criar rotas com dados que não conhecemos, fazemos através de variáveis, que definimos com :nomeDaVariavel, seguindo o formato abaixo:
// route.get('/room/:room/:question/:action')

module.exports = route
