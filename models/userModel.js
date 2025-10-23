// Importar o json para servir como banco de dados
const db = require("../data/db.json");

// Variável pra armazenar os usuários vindos do db
let listaUsuarios = db.usuarios;

module.exports = {
  // Login
  // Função para válidar o login
  login: (email, senha) => {
    // Busca na lista de usuários, se tem aquele usuário com as informações que ele passou
    let logado =
      listaUsuarios.find(
        (user) => user.email === email && user.senha == senha
      ) || null;
    return logado;
  },
  //CRUD
  // Função para cadastrar um novo usuRIO
  salvar: ({ usuario, email, senha, tipo }) => {
    const novoUsuario = {
      id: listaUsuarios.length + 1,
      usuario,
      email,
      senha,
      tipo
    };
    listaUsuarios.push(novoUsuario);
    console.log("Novo usuário salvo", novoUsuario);
    return novoUsuario;
  },
  // Busca todos os usuários do banco
  listarTodos: () => {
    return listaUsuarios;
  },
  // Busca um usuário específico do banco
  buscarPorId: (id) => {
    return listaUsuarios.find((user) => user.id == id || null);
  },

  atualizar: (id, {usuario, email, senha, tipo}) => {
    // Busca na lista de usúarios, um usuário com aquele id específico, se achar, pega no index dele e guarda na variável index
    const index = listaUsuarios.findIndex((user) => user.id == id);
    // Se achar um usuário, substitui as informações que estavam nele, pelas novas enviadas
    if(index === -1) return null;
    // Se achar um usúario, substitui as informações que estavam nele, pelas novas enviadas
    listaUsuarios[index]={
      ...listaUsuarios[index],
      usuario: usuario || listaUsuarios[index].usuario,
      email: email || listaUsuarios[index].email,
      senha: senha || listaUsuarios[index].senha,
      tipo: tipo || listaUsuarios[index].tipo
    };
    // Retorna o suário atualizado
    return listaUsuarios[index];
  },
  
  deletar: (id) => {
    const index = listaUsuarios.findIndex((user) => user.id == id)
     if(index === -1) return false;
     listaUsuarios.splice(index, 1);
     return true;
  }
};
