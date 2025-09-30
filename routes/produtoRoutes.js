//Importação do módulo express
const express = require("express")

//Criando uma variável pra gerenciar as rotas de usuário
const roteador = express.Router()

//Importando tudo que tem no arquivo de controller do usuário
const produtoController=require("../controllers/produtoController")


roteador.get("/cadastrar", produtoController.formCadastroP)
roteador.post("/cadastrar", produtoController.salvarProduto)



// lista todos os produtos
roteador.get("/", produtoController.listarProdutos)
// busca produto por id
roteador.get("/:id", produtoController.buscarProduto)
// atualiza produto por id
roteador.put("/:id", produtoController.atualizarProduto)
// deleta produto por id
roteador.delete("/:id", produtoController.deletarProduto)


module.exports = roteador