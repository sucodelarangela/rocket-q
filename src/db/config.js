// Importar os dois módulos do sqlite que acabamos de instalar
const sqlite3 = require('sqlite3')
const {open} = require('sqlite')
// No caso acima, iremos importar apenas a função 'open()' do sqlite, pois precisamos abrir a conexão com o banco de dados

// Configuração do banco de dados
module.exports = () =>
  open({
    filename: '/src/db/rocketq.sqlite', // caminho e nome do nosso banco de dados
    driver: sqlite3.Database // o driver é quem comanda o banco de dados. Se futuramente quisermos usar um banco de dados mais poderoso, basta mudarmos o driver do sqlite3 para outro
  })
