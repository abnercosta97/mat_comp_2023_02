//exemplo de codigo recurtsivo:

function sequenceREC(n: number): number {
  if (n == 1) {
    return 1;
  } else {
    return 2 * sequenceREC(n - 1);
  }
}
console.log( "RECURSIVO: " , sequenceREC(10));

//exemplo de codigo iterativo:

function sequenceITE(n: number): number {

    let term: number = 1;
    let limit: number = 2;
    while(limit<=n){
        term = term * 2;
        limit = limit + 1;
    }
    return term;
}
console.log( "ITERATIVO: " ,sequenceITE(10));