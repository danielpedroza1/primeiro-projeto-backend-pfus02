// Importar o json para servir como banco de dados
const db = require("../data/db.json")

// Variável pra armazenar os usuários vindos do db
let listaUsuarios = db.usuarios

module.exports = {
    // Login
    // Função para válidar o login
    login : (usuario,senha) => {
        // Busca na lista de usuários, se tem aquele usuário com as informações que ele passou
        let logado = listaUsuarios.find((user)=>{user.email === usuario && user.senha === senha}) || null
        return logado
    }
}