module.exports = {
  create(req, res) {
    let roomId = 654321

    // createInfoBD = {}

    res.redirect(`/room/${roomId}`)
  }
}
