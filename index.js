const express = require('express')

const app = express()

const port = 5000

const path = require('path')
const caminho = path.join(__dirname, "Views")

app.get("/home", (req,res) => {
    res.status(200)
    res.sendFile(`${caminho}/index.html`)
})

app.get("/pokemon", (req,res) => {
     res.status(200)
    res.send("Charizard")
})

app.use((req,res) => {
    res.status(404)
    res.sendFile(`${caminho}/404.html`)
})

app.get("/", (req,res) => {
    res.status(200).send("Olá, parabéns você conseguiu")
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    
})