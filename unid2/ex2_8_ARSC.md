2.8. O que acontece ao se executar uma chamada a uma função recursiva que chama a si mesma um elevado número de vezes? Dê um exemplo utilizando o código-fonte da progressão aritmética fornecido pelo professor. Faça um comparativo escrevendo um algoritmo e código que sejam equivalentes ao recursivo em termos de entradas e saídas, mas que utilizem iteração ao invés de recursão. Qual sua conclusão?  

 

Quando você executa uma função recursiva que chama a si mesma um grande número de vezes, pode ocorrer um estouro de pilha, conhecido como "stack overflow". Isso acontece porque cada chamada recursiva empilha um novo quadro de pilha na memória, e quando você tem um grande número de chamadas recursivas, a pilha de chamadas fica muito profunda, consumindo todo o espaço disponível na pilha. Isso resulta em um erro e encerra a execução do programa. Conclui-se que o código iterativo é mais eficiente em termos de uso de memória e é capaz de lidar com números maiores sem causar estouros de pilha. 

Para testar os codigos: `npm run oito`

exemplo de codigo recurtsivo:

function sequenceREC(n: number): number {
  if (n == 1) {
    return 1;
  } else {
    return 2 * sequenceREC(n - 1);
  }
}
console.log(sequenceREC(10));

exemplo de codigo iterativo:

function sequenceITE(n: number): number {

    let term: number = 1;
    let limit: number = 2;
    while(limit<=n){
        term = term * 2;
        limit = limit + 1;
    }
    return term;
}
console.log(sequenceITE(10));
