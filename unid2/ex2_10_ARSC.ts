// 2.10. A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja, para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um mesmo valor

class FibonacciSequence {
  private memo: Map<number, number>;

  constructor() {
    this.memo = new Map<number, number>();

    this.memo.set(1, 1);

    this.memo.set(2, 1);
  }

  calculateTerm(n: number): number {
    if (this.memo.has(n)) {
      // Se o valor já foi calculado antes, retorná-lo diretamente

      console.log(`Valor de Fibonacci(${n}) já calculado.`);

      return this.memo.get(n)!;
    }

    const term = this.calculateTerm(n - 1) + this.calculateTerm(n - 2);

    this.memo.set(n, term);

    return term;
  }
}

const fibonacci = new FibonacciSequence();

console.log("Termo 5:", fibonacci.calculateTerm(5));
console.log("Termo 6:", fibonacci.calculateTerm(6));
console.log("Termo 7:", fibonacci.calculateTerm(7));
console.log("Termo 8:", fibonacci.calculateTerm(8));
console.log("Termo 9:", fibonacci.calculateTerm(9));
