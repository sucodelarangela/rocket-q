module.exports = {
  index(req, res) {
    const roomId = req.params.room
    const questionId = req.params.question
    const action = req.params.action
    const password = req.body.password // password é o nome dado ao input de senha na modal

    console.log(
      `room = ${roomId}, questionId = ${questionId}, action = ${action}, password = ${password}`
    )
  }
}

// O index() será exportado e importado no arquivo route.js e incorporado à requisição de rota da url (route.post)
