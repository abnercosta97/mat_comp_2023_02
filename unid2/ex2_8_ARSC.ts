//exemplo de codigo recurtsivo:

function sequenceREC_ARSC(n: number): number {
  if (n == 1) {
    return 1;
  } else {
    return 2 * sequenceREC_ARSC(n - 1);
  }
}
console.log( "RECURSIVO: " , sequenceREC_ARSC(10));

//exemplo de codigo iterativo:

function sequenceITE_ARSC(n: number): number {

    let term: number = 1;
    let limit: number = 2;
    while(limit<=n){
        term = term * 2;
        limit = limit + 1;
    }
    return term;
}
console.log( "ITERATIVO: " ,sequenceITE_ARSC(10));