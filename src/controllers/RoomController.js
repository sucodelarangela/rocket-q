// Importando a base de dados
const Database = require('../db/config')

module.exports = {
  async create(req, res) {
    const db = await Database()

    // Pegar a senha da sala
    const pass = req.body.password
    let isRoom = true
    let roomId

    // Enquanto houver sala com número igual...
    while (isRoom) {
      // Criar novo número da sala
      for (let i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString())
        // O toString vai transformar o número em string e vai evitar que eles sejam somados e, sim, concatenados
      }

      // Verificar se o número da sala já existe. Usamos o SELECT FROM. Onde tem 'id' podemos deixar um '*' para buscar tudo ou buscar mais de um item separando-os com ',' (por ex. 'id, pass')
      const roomHasSameId = await db.all(`SELECT id FROM rooms`)

      // Teremos o retorno de uma array. O método .some() faz a verificação da condição entre parênteses
      isRoom = roomHasSameId.some(roomSameId => roomSameId === roomId)

      // Se o id não existir...
      if (!isRoom) {
        // Inserir no banco de dados: em INSERT INTO dizemos a ordem que os dados serão inseridos e em VALUE indicamos os valores em si
        await db.run(`INSERT INTO rooms (
          id,
          pass
        ) VALUES (
          ${parseInt(roomId)},
          ${pass}
        )`)
      }
    }

    // Fechar o banco de dados
    await db.close()

    res.redirect(`/room/${roomId}`)
  },

  async open(req, res) {
    const db = await Database()
    const roomId = req.params.room
    // Pegar as perguntas específicas de uma sala:
    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 0`
    )
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} and read = 1`
    )

    res.render('room', {
      roomId: roomId,
      questions: questions,
      questionsRead: questionsRead
    })
  }
}
