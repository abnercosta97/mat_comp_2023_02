/* 
PP.4.2. Considere uma base de dados relacional que possua uma tabela de usuários com os
seguintes valores:
Autor: Fabrício Galende Marques de Carvalho
| Nome     | Telefone |
|----------|----------|
| Fabrício | 111      |
| Beatriz  | 222      |
| Fabíola  | 333      |
Utilizando consultas SQL, mostre que não é possível efetuar uma quantidade de consultas que
seja superior a P(A), sendo A o conjunto formado pelas n-uplas que compõem as linhas da
tabela. Para esse caso, ilustre todas as consultas e resultados possíveis. 

*/
create database prova3;
create table Usuarios (
    Nome varchar(50),
    Telefone varchar(50)
);
insert into Usuarios values ('Fabrício', '111');
insert into Usuarios values ('Beatriz', '222');
insert into Usuarios values ('Fabíola', '333');

/* 
| Nome     | Telefone |
|----------|----------|
| Fabrício | 111      |
| Beatriz  | 222      |
| Fabíola  | 333      |
 */
/* P(A) = {(Fabrício, 111), (Beatriz, 222), (Fabíola, 333)}. */
/* Consulta para 'Fabrício' apenas:*/
SELECT * FROM Usuarios WHERE Nome = 'Fabrício';
/* Consulta para 'Beatriz' apenas:*/
SELECT * FROM Usuarios WHERE Nome = 'Beatriz';
/* Consulta para 'Fabíola' apenas:*/
SELECT * FROM Usuarios WHERE Nome = 'Fabíola';
/* Consulta para 'Fabrício' e 'Beatriz':*/
SELECT * FROM Usuarios WHERE Nome IN ('Fabrício', 'Beatriz');
/* Consulta para 'Fabrício' e 'Fabíola':*/
SELECT * FROM Usuarios WHERE Nome IN ('Fabrício', 'Fabíola');
/* Consulta para 'Beatriz' e 'Fabíola':*/
SELECT * FROM Usuarios WHERE Nome IN ('Beatriz', 'Fabíola');
/* Consulta para '111' apenas:*/
SELECT * FROM Usuarios WHERE Telefone = '111';
/* Consulta para '222' apenas:*/
SELECT * FROM Usuarios WHERE Telefone = '222';
/* Consulta para '333' apenas:*/
SELECT * FROM Usuarios WHERE Telefone = '333';
/* Consulta para '111' e '222':*/
SELECT * FROM Usuarios WHERE Telefone IN ('111', '222');
/* Consulta para '111' e '333':*/
SELECT * FROM Usuarios WHERE Telefone IN ('111', '333');
/* Consulta para '222' e '333':*/
SELECT * FROM Usuarios WHERE Telefone IN ('222', '333');
/* Consulta para 'Fabrício', 'Beatriz' e 'Fabíola':*/
SELECT * FROM Usuarios;
