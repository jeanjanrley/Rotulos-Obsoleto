const express = require('express')
const rotuloSchema = require('../mongo/modules/cadastroDeRotulos')
const resultado = require('../mongo/modules/find')

const cors = require('cors')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.post('/cadastrar/rotulo', async (req, res) => {
  const rotulo = req.body
  await new rotuloSchema(rotulo).save()
  console.log("Salvo com sucesso!")
  res.send('Salvo com sucesso! ')
})



app.get("/", (req, res) => {
  console.log(resultado.then({}))
  res.send("resultado")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app