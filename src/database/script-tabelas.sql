-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE BJJUP;
USE BJJUP;


CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE pontuacaoTotal (
pontos int,
fkUsuario int,
constraint fkUsuarioPontos foreign key (fkUsuario)
	references usuario(id)
);

select * from usuario;

select * from pontuacaoTotal;

SELECT 
    SUM(
		CASE 
	WHEN pontos >= 50 THEN 1 ELSE 0 END
	) AS acima,
    SUM(
		CASE 
	WHEN pontos < 50 THEN 1 ELSE 0 END
	) AS abaixo
FROM 
    pontuacaoTotal;