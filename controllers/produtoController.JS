const path = require("path");
const produtoModel = require("../models/produtoModel");
const { json } = require("express");
module.exports = {

  formCadastroP: (req, res) => {
    res.render("produtos/cadastroProduto", {titulo: "cadastro Produto"}); 
  },

  salvarProduto: (req, res) => {
    const { produtos, nome, descricao, preco, quantidade, categoria, Imagem} = req.body;
    produtoNovo = produtoModel.salvar({ produtos, nome, descricao, preco, quantidade, categoria, Imagem});
    res.render("produtos/confirmacaoProdutos",{
      tipo: "cadastro",
      titulo: "Cadastro confirmado",
      produtoNovo
    })
  },

  listarProdutos: (req, res) => {
    const produtos = produtoModel.listarTodos();
    res.render("produtos/listaProdutos", 
              {produtos, titulo:"lista de produtos"});
  },

  buscarProduto: (req, res) => {
    const id = req.params.id;
    const produto = produtoModel.buscarPorId(id);
  
    if (!produto) {
      return res.status(404).render("produtos/erroProduto", {
        titulo: "erro",
        mensagem: "Produto não encontrado"
      });
    }

    res.render("produtos/editarProdutos", {
      titulo: "editar",
      produto
    });
  },

  atualizarProduto: (req, res) => {
    const id = req.params.id;
    const { nome, descricao, preco, quantidade, categoria, imagem } = req.body;

    const produtoAtualizado = produtoModel.atualizar(id, { nome, descricao, preco, quantidade, categoria, imagem });

    if (!produtoAtualizado) {
      return res.status(404).render("produtos/erroProduto", {
        titulo: "erro",
        mensagem: "não foi possivel atualizar"
      });
    }

    res.render("produtos/confirmacaoProdutos", {
      titulo: "Edicao confirmada",
      tipo: "edicao",
      produtoAtualizado
    });
  },

  deletarProduto: (req, res) => {
    const id = req.params.id;
    const deletado = produtoModel.deletar(id);

    if (!deletado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json({ mensagem: "Produto deletado com sucesso" });
  }

};