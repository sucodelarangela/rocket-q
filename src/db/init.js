// Este arquivo não faz parte do projeto. Ele apenas será rodado antes para que as tabelas do banco de dados sejam criadas e depois possamos salvar os dados lá dentro. Aqui serão geradas essas tabelas e o sqlite é que faz a gestão disso tudo

// Importa o config.js
const Database = require('./config')

const initDb = {
  async init() {
    // async e await são usados quando queremos dizer ao JS que ele não deve rodar uma linha antes de receber o resultado da anterior
    const db = await Database()
    // Dentro de exec() colocaremos o código para criação da tabela (código sql)
    await db.exec(`CREATE TABLE rooms (
      id INTEGER PRIMARY KEY,
      pass TEXT
    )`)

    await db.exec(`CREATE TABLE questions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      read INT,
      room INT
    )`)

    // Após pegar as informações da base de dados, usamos o comando abaixo para fechar o acesso ao banco de dados
    await db.close()
  }
}

initDb.init()

// Sobre códigos SQL: comandos SQL sempre vem em letra maíuscula. O que não for cmando, em letra minúscula.
// INTEGER significa número inteiro
// PRIMARY KEY significa que um único elemento na tabela pode ter uma id, e estas nunca serão iguais
// AUTOINCREMENT significa que o bd vai incrementar automaticamente o id das perguntas
