const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const caminho = path.join(__dirname, "Views")

// Importações
// Importa as rotas de usuário
const userRoutes= require("./routes/userRoutes")

// Interpretador de json, pra tratar as informações do body
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Cria uma rota principal para as sub rotas de usuário
app.use("/usuarios",userRoutes)

// Definindo o ejs como template engine
app.set('view engine', 'ejs')

// Definindo 'atalho' onde buscar as views
app.set("views", path.join(__dirname, "views"))

//rota de página inicial
app.get("/home", (req,res) => {
    res.status(200)
    res.render("index")
})

//rota para quando tentar acessar uma rota que não existe
app.use((req,res) => {
    res.status(404)
    res.render("404")
})

//Rota inicial do projeto
app.get("/", (req,res) => {
    res.status(200).send("Olá, parabéns você conseguiu")
})

//subir o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    
})