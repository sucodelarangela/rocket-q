// Importando a base de dados
const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    const db = await Database()

    // Pegar a senha da sala
    const pass = req.body.password

    // Criar número da sala
    let roomId
    for (let i = 0; i < 6; i++) {
      i == 0
        ? (roomId = Math.floor(Math.random() * 10).toString())
        : (roomId += Math.floor(Math.random() * 10).toString())
      // O toString vai transformar o número em string e vai evitar que eles sejam somados e, sim, concatenados
    }

    // Inserir no banco de dados: em INSERT INTO dizemos a ordem que os dados serão inseridos e em VALUE indicamos os valores em si
    await db.run(`INSERT INTO rooms (
      id,
      pass
    ) VALUES (
      ${parseInt(roomId)},
      ${pass}
    )`)

    // Fechar o banco de dados
    await db.close()

    res.redirect(`/room/${roomId}`)
  }
}
