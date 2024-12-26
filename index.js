const express = require("express")
const server = express()
const filmes = require("./src/data/fimes.json")

server.get("/filmes", (req, res) => {
  return res.json(filmes)
})

server.listen(8000, () => {
  console.log("Servidor rodando na porta 8000")
})
