/* 
TC.4.4. Se uma tabela em um banco de dados relacional, contendo n linhas cujas combinações
de valores das colunas sejam únicas, pode ser considerada como um conjunto, diga qual a
cardinalidade desse conjunto. Qual a cardinalidade do conjunto formado pelos conjuntos de
resultado de todas as consultas possíveis? Ilustre sua resposta com um exemplo numérico
simples através de uma tabela contendo 4 tuplas. 
*/

/*
Uma tabela em um banco de dados relacional que possui n linhas com combinações únicas de valores nas colunas pode ser considerada um conjunto. A cardinalidade desse conjunto é igual ao número de linhas na tabela. Em outras palavras, a cardinalidade é o número de tuplas (ou registros) na tabela.

Para ilustrar isso com um exemplo numérico simples, vamos considerar uma tabela com 4 tuplas (linhas). Vou apresentar uma tabela hipotética com algumas colunas e valores fictícios:

| ID | Nome   | Idade | Cidade    |
|----|--------|-------|-----------|
| 1  | João   | 30    | São Paulo |
| 2  | Maria  | 25    | Rio de Janeiro |
| 3  | Pedro  | 28    | Belo Horizonte |
| 4  | Ana    | 32    | Curitiba  |
Neste caso, a tabela tem 4 linhas, portanto, a cardinalidade do conjunto é 4.

Agora, em relação à cardinalidade do conjunto formado pelos conjuntos de resultado de todas as consultas possíveis, isso depende do número de consultas que podem ser feitas na tabela. Para uma tabela com n tuplas, o número de consultas possíveis é 2^n, porque você pode fazer consultas que incluam ou excluam cada tupla individualmente.

| E | = 4
No exemplo com 4 tuplas, há 2^4 = 16 consultas possíveis, desde consultas que retornam todas as tuplas até consultas que retornam apenas uma tupla específica, ou mesmo consultas que retornam um conjunto vazio (quando nenhum critério é satisfeito). A cardinalidade do conjunto formado por todos esses conjuntos de resultado pode variar dependendo das consultas específicas que você executa.
*/