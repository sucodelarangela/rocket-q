// Importar o express que acabamos de instalar e que está na pasta node_modules>express
const express = require('express')
const QuestionController = require('./controllers/QuestionController.js')
const RoomController = require('./controllers/RoomController.js')

// Criar variável de rota
const route = express.Router()

// Pegar as rotas
// Quando o domínio terminar em '/', renderiza na tela o arquivo index (que antes era html e agora é ejs)
route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
// Quando o domínio terminar em '/room', renderiza na tela o arquivo index (que antes era html e agora é ejs) com a página enter-room como conteúdo principal na div container
route.get('/room/:room', (req, res) => res.render('room'))
// Quando o domínio terminar em '/create-pass', renderiza na tela o arquivo index (que antes era html e agora é ejs) com a página create-pass como conteúdo principal na div container
route.get('/create-pass', (req, res) =>
  res.render('index', {page: 'create-pass'})
)
// Precisamos criar uma rota para quando fizermos determinadas ações na sala de perguntas. Por exemplo, temos que criar uma rota para o número da sala, dentro dessa precisamos identificar o número da pergunta e que ação foi tomada. Quando queremos criar rotas com dados que não conhecemos, fazemos através de variáveis, que definimos com :nomeDaVariavel, seguindo o formato abaixo:
route.post('/question/:room/:question/:action', QuestionController.index)

route.post('/create-room', RoomController.create)

module.exports = route
