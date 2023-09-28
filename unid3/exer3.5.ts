class FuncoesLogicaProposicional {
  static and(p: boolean, q: boolean): boolean {
    return p && q;
  }

  static or(p: boolean, q: boolean): boolean {
    return p || q;
  }

  static implicacao(p: boolean, q: boolean): boolean {
    return !p || q;
  }

  static equivalencia(p: boolean, q: boolean): boolean {
    return p === q;
  }

  static xor(p: boolean, q: boolean): boolean {
    return (p || q) && !(p && q);
  }
}

function tabelaVerdade(): void {
  console.log("Tabela Verdade:");
  console.log("p | q | AND | OR | Implicação | Equivalência | XOR");
  console.log("--|---|-----|----|------------|--------------|----");

  for (let p = true; p >= false; p = !p) {
    for (let q = true; q >= false; q = !q) {
      const resultadoAnd = FuncoesLogicaProposicional.and(p, q);
      const resultadoOr = FuncoesLogicaProposicional.or(p, q);
      const resultadoImplicacao = FuncoesLogicaProposicional.implicacao(p, q);
      const resultadoEquivalencia = FuncoesLogicaProposicional.equivalencia(
        p,
        q
      );
      const resultadoXOR = FuncoesLogicaProposicional.xor(p, q);

      console.log(
        `${p} | ${q} |  ${resultadoAnd}  |  ${resultadoOr} |     ${resultadoImplicacao}     |       ${resultadoEquivalencia}      |  ${resultadoXOR}`
      );
    }
  }
}

console.log(tabelaVerdade());
