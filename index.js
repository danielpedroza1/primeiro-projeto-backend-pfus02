const express = require('express')
const app = express()
const port = 5000

const path = require('path')
const caminho = path.join(__dirname, "Views")

// Importações
// Importa as rotas de usuário
const userRoutes= require("./routes/userRoutes")
const produtoRoutes= require("./routes/produtoRoutes")

// Interpretador de json, pra tratar as informações do body
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// Cria uma rota principal para as sub rotas de usuário
app.use("/usuarios",userRoutes)
app.use("/produtos",produtoRoutes)

// Definindo o ejs como template engine
app.set('view engine', 'ejs')

// Definindo 'atalho' onde buscar as views
app.set("views", path.join(__dirname, "views"))

app.use(express.static('public'))

//rota de página inicial
app.get("/home", (req,res) => {
    res.status(200).render("index",{titulo: "Página inicial"})
})

//Rota inicial do projeto
app.get("/", (req,res) => {
    res.status(200).render("index", {titulo: "Página inical"})
})

//rota para quando tentar acessar uma rota que não existe
app.use((req,res) => {
    res.status(404)
    res.render("404", {titulo: "página de erro"})
})

//subir o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
    
})