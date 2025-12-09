// Importa tudo que tem no model
const produtoModel = require("../models/produtoModel");


module.exports = {
  //CRUD

  //C
  formCadastro: (req,res) => {
    // Renderiza a pagina de cadastro
    res.render("produtos/cadastroProduto", {titulo: "Cadastro"})
  },

  salvarProduto:(req,res) => {
    // Criar um objeto com as informações da view
    const {nome, descricao, preco, quantidade, categoria, imagem} = req.body
    
    // manda as informações pro model
    produtoModel.salvar({nome, descricao, preco, quantidade, categoria, imagem}, (erro, produtoNovo) => {
      // Se deu erro, renderiza a página de erro, mostrando a mensagem do erro
      if(erro){
        return res.status(500).render("produtos/erroProduto", {
          titulo:"Erro",
          mensagem: "Erro ao salvar o produto"
        })
      }

      // Se deu certo, renderiza a página de confirmação
      res.render("produtos/confirmacaoProdutos", {
        titulo:"cadastroConfirmado",
        tipo:"cadastro",
        produtoNovo
      })
    })

  },

  //R
  listarProdutos: (req,res) => {
    // acessar o model, e resgatar as informações
    produtoModel.listarTodos((erro, produtos) => {
      if(erro){
        return res.status(500).render("produtos/erroProduto", {
          titulo:"Erro",
          mensagem: "Erro ao listar os produtos"
        })
      } 

      // Se deu certo, renderiza a página de lista de usúarios
      res.render("produtos/listaProdutos", {
        titulo: "Lista de produtos",
        produtos
      })
    })
  },

  //U
  buscarProduto: (req,res) => {
      // Busca o id vindo como parametro da url
      const id = req.params.id
  
      // Acessar o model para realizar a busca
      produtoModel.buscarPorId(id, (erro, produto) => {
        // se deu erro na busca, informa o erro
        // ou se não achou o usuário
        if(erro || !produto){
          return res.status(500).render("produtos/erroProduto", {
            titulo: "Erro",
            mensagem: "Erro ao buscar o produto"
          })
        }
        // Se encontrou, renderiza a página de edição
        res.render("produtos/editarProdutos", {titulo: "Edição", produto})
      })
    },
  atualizarProduto: (req,res) => {
      // Busca o id vindo como parametro da url
      const id = req.params.id
  
      // Criar um objeto com as informações da view
      const {nome, descricao, preco, quantidade, categoria, imagem} = req.body
  
      // Acessar o model, e atualizar o usuario
      produtoModel.atualizar(id, {nome, descricao, preco, quantidade, categoria, imagem}, (erro, atualizado) => {
        // se deu erro na atualizacao, informa o erro
        // ou se não conseguiu
        if(erro){
          return res.status(500).render("produtos/erroProduto", {
            titulo: "Erro",
            mensagem: "Erro ao atualizar o produto"
          })
        }
        
        const produtoAtualizado = atualizado
        res.render("produtos/confirmacaoProdutos", {
          tipo: "edicao",
          titulo: "Edição confirmada",
          produtoAtualizado
        });
        }
      );
    },

  //D
  deletarProduto: (req,res) => {
    // Busca o id vindo como parametro da url
      const id = req.params.id
  
    // Acessar o model, e solicitar a exclusão do usuario
    produtoModel.deletar(id, (erro, sucesso) => {
      // Se deu erro ao deletar, informa o erro
      // Ou se não conseguiu 
      if(erro || !sucesso){
          return res.status(500).render("produtos/erroProduto", {
            titulo: "Erro",
            mensagem: "Erro ao buscar o produto"
          });
        }
  
        const deletado = {produto: "selecionado"}
        // Renderiza a tela de sucesso
        res.render("produtos/confirmacaoProdutos", {
          tipo: "excluir",
          titulo: "Produto deletado",
          deletado
        });
        });
    },
  }
