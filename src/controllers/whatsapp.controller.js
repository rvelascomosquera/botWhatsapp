const verifyToken = (res, res) => {
  res.send("token")
}

const ReceivedMessage = (res, req) => {
  res.send("Recibido")
}


module.exports = {
  verifyToken,
  ReceivedMessage
}