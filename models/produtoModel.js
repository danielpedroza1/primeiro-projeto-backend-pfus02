// IMPORTA A CONEXÃO COM O BANCO DE DADOS
const conn = require("../config/conexao-banco.js")

module.exports = {
  

  //criar == create
  salvar: ({nome, descricao, preco, quantidade, categoria, imagem}, callback) => {
  //Variável sql que guarda a consulta desejada
  const sql = `
  INSERT INTO produtos (nome, descricao, preco, quantidade, categoria, imagem)
  VALUES (?, ?, ?, ?, ?, ?)
  `

  // Valores qque serão utilizados na consulta
  const valores = [nome, descricao, preco, quantidade, categoria, imagem]

  //Executar o comando no banco
  conn.query(sql, valores, (erro, resultado) => {
  // Lidar com o erro
  if(erro){
    return callback(erro,null )
  }
  
  // Objeto com as informações que o usuário inseriu no banco
  const novoProduto = {id: resultado.insertId , nome, descricao, preco, quantidade, categoria, imagem}

  callback(null, novoProduto)
  })
  },
  //Listar = read
  listarTodos: (callback) => {
  // Váriavel sql que guarda a consulta desejada
  const sql = `SELECT * FROM produtos`

  //Executar o comando no banco
  conn.query(sql, (erro, resultados) => {
    if(erro){
      return callback(erro, null)
    }
    
    callback(null, resultados)
  })
  },
  //Atualizar = updeii
  //buscar o usuário
  buscarPorId: (id, callback) => {
      //Variável sql que guarda a consulta desejada
      const sql = `
      SELECT * FROM produtos
      WHERE id = ?
      `
      // Variável com informação oculta/misteriosa
      const valor = [id]
      //Executar o comando no banco
      conn.query(sql, valor, (erro, resultados) => {
      if(erro){
      return callback(erro, null)
      }
      
      callback(null, resultados[0] || null)
      })
  },
  //Atualizar informações
   atualizar: (id, {nome, descricao, preco, quantidade, categoria, imagem}, callback) => {
      //Variável sql que guarda a consulta desejada
      const sql = `
      UPDATE produtos
      SET nome =?, descricao=? , preco=?, quantidade=?, categoria=?, imagem=?
      WHERE id = ?
      `
      // Variável com informação oculta/misteriosa
      const valores = [nome, descricao, preco, quantidade, categoria, imagem, id]

      const atualizado = {
      id,
      nome,
      descricao,
      preco,
      quantidade,
      categoria,
      imagem
    };
      //Executar o comando no banco
      conn.query(sql, valores, (erro, resultado) => {
      if(erro){
      return callback(erro, null)
    }
    
      callback(null, atualizado)
    })
  },
  // excluir = deletar
  deletar: (id, callback) => {
    //Variável sql que guarda a consulta desejada
    const sql= `DELETE FROM produtos
                WHERE id = ?`
    
    // Variável com informação oculta/misteriosa
    const valor = [id]
    //Executar o comando no banco
    conn.query(sql, valor, (erro, resultado) => {
     if(erro){
      return callback(erro, null)
    }
    
    callback(null, resultado.affectedRows > 0)
    })
  }
}