-- banco criado
CREATE DATABASE supermercado;

USE supermercado;

-- criação da tabela de usuarios
create table usuarios(
id INT AUTO_INCREMENT PRIMARY KEY,
usuario varchar(255),
email VARCHAR(255),
senha VARCHAR(255),
tipo VARCHAR(255)
);

-- criação da tabela de produtos
create table produtos(
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(255),
descricao VARCHAR(255),
preco DECIMAL(6,2),
quantidade INT,
categoria VARCHAR(255),
imagem LONGTEXT
);
DROP TABLE produtos;
--Insert para ver os valores nas tabelas
SELECT * FROM usuarios;

SELECT * FROM produtos;
--insert pra criar dados
INSERT INTO usuarios(id, usuarios, email, senha, tipo)
VALUES(DEFAULT, "Pokai", "pokai@gmail.com", "1239", "funcionario");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "Lata", "um ferro em formato redendo para guardar objetos", "5", "1", "objeto", null);

--Update pra atualizar um dado
UPDATE usuarios
SET usuario = "Gregory", senha= "eu sou top"
WHERE id=1;

--Atualize a imagem do produto pra um link de verdade, e a quantidade pra 10
UPDATE produtos
SET imagem="https://media.istockphoto.com/id/629616876/pt/foto/lata-de-estanho.jpg?s=612x612&w=0&k=20&c=qKnPKTLRX7wcp4nFAMUwxlswzQts1DPWuYOcfsvA5ts=", quantidade="20"
WHERE id=1;


--
 Vai ficar faltando só o delete, mas nao vou fazer não

-- 5 usúarios diferentes 
-- 15 produtos diferentes
INSERT INTO usuarios(id, usuario, email, senha, tipo)
VALUES(DEFAULT, "oi", "oi@gmail.com", "1239", "funcionario");
INSERT INTO usuarios(id, usuario, email, senha, tipo)
VALUES(DEFAULT, "olá", "olá@gmail.com", "1239", "funcionario");
INSERT INTO usuarios(id, usuario, email, senha, tipo)
VALUES(DEFAULT, "ei", "ei@gmail.com", "1239", "funcionario");
INSERT INTO usuarios(id, usuario, email, senha, tipo)
VALUES(DEFAULT, "hellow", "hellow@gmail.com", "1239", "funcionario");
INSERT INTO usuarios(id, usuario, email, senha, tipo)
VALUES(DEFAULT, "coe", "coe@gmail.com", "1239", "funcionario");


INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "macaco", "levanta carro", "5", "1", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "alicate", "parecido com uma tessoura", "10", "40", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "veneno de rato", "mata rato", "50", "40", "casa","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "teclado", "digitar com os dedos", "70", "25", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "martelo", "martela pregos", "29", "60", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "alto falante", "som alto", "3", "9", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "capa de supermen", "é uma capa", "50", "8", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "roupa para elefante", "é literalmente o nome do produto", "50", "40", "casa","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "tenis de babuino", "tenis né", "70", "25", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "luz", "brilho", "29", "60", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "cholate de nutela com arroz doce mais pipoca", "alimento estranho", "5", "1", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "produto mistério", "misterioso", "10", "40", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "casa de papai noel", "é no polo norte", "50", "40", "casa","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "ferro", "só o ferro, nao pe lata, ou pode ser tbm", "70", "25", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");

INSERT INTO produtos(id, nome, descricao, preco, quantidade, categoria, imagem)
VALUES(DEFAULT, "imã", "nao é irmã, é imã que puxa e acabou", "29", "60", "objeto", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkEQBXzJ23LZu7OxKyHYZ7DcpObjVFtd77lQ&s");
