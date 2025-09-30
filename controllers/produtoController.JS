const path = require("path");
const produtoModel = require("../models/produtoModel");
const { json } = require("express");
module.exports = {

  formCadastroP: (req, res) => {
    res.render("cadastroProduto"); 
  },

  salvarProduto: (req, res) => {
    const { nome, descricao, preco, quantidade, categoria} = req.body;
    produtoModel.salvar({nome, descricao, preco, quantidade, categoria});
    res.render("cadastroConfirmado"); 
  },

  listarProdutos: (req, res) => {
    const produtos = produtoModel.listarTodos();
    res.json(produtos)
    res.render("produtos", { produtos });
  },

  buscarProduto: (req, res) => {
    const id = req.params.id;
    const produto = produtoModel.buscarPorId(id);

    if (!produto) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json(produto);
  },

  atualizarProduto: (req, res) => {
    const id = req.params.id;
    const { nome, descricao, preco, quantidade, categoria } = req.body;

    const produtoAtualizado = produtoModel.atualizar(id, { nome, descricao, preco, quantidade, categoria });

    if (!produtoAtualizado) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    res.json({ mensagem: "Produto atualizado com sucesso", produto: produtoAtualizado });
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