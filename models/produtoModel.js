const db = require("../data/db.json");
let listaProdutos = db.produtos;

module.exports = {
  salvar: ({ nome, descricao, preco, quantidade, categoria, Imagem}) => {
    const novoProduto = {
      id: listaProdutos.length + 1,
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      Imagem
    };
    listaProdutos.push(novoProduto);
    console.log("Novo produto salvo", novoProduto);
    return novoProduto;
  },
 
  listarTodos: () => {
    return listaProdutos;
  },

  buscarPorId: (id) => {
    return listaProdutos.find((prod) => prod.id == id || null);
  },

  atualizar: (id, {nome, descricao, preco, quantidade, categoria, imagem}) => {

    const index = listaProdutos.findIndex((prod) => prod.id == id);

    if(index === -1) return null;
    listaProdutos[index]={
      ...listaProdutos[index],
      nome: nome || listaProdutos[index].nome,
      descricao: descricao || listaProdutos[index].descricao,
      preco: preco || listaProdutos[index].preco,
      quantidade: quantidade || listaProdutos[index].quantidade,
      categoria: categoria || listaProdutos[index].categoria,
      imagem: imagem || listaProdutos[index].imagem,
    };
  
    return listaProdutos[index];
  },
  
  deletar: (id) => {
    const index = listaProdutos.findIndex((prod) => prod.id == id)
     if(index === -1) return false;
     listaProdutos.splice(index, 1);
     return true;
  }
};
