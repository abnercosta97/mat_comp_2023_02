//2.9. Uma progressão geométrica é uma sequência numérica onde cada elemento, a partir do segundo, é obtido multiplicando-se o anterior por uma constante. Utilizando uma linguagem de programação que dê suporte a orientação a objetos, defina uma progressão geométrica e dê exemplo de geração de seus primeiros 50 termos.

class ProgressaoGeometrica {
  primeiroTermo: number;
  razao: number;

  constructor(primeiroTermo: number, razao: number) {
    this.primeiroTermo = primeiroTermo;
    this.razao = razao;
  }

  gerarTermos(qtdTermos: number): number[] {
    const termos: number[] = [this.primeiroTermo];

    for (let i = 1; i < qtdTermos; i++) {
      const termoAnterior = termos[i - 1];

      const proximoTermo = termoAnterior * this.razao;

      termos.push(proximoTermo);
    }

    return termos;
  }
}

const pg = new ProgressaoGeometrica(1, 2);
const primeiros50Termos = pg.gerarTermos(50);
console.log(primeiros50Termos);
