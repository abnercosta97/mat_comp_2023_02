//2.6. Utilizando linguagem de programação defina:

//a) Uma enumeração para os meses do ano.

enum Months {
  January = 1,

  February = 2,

  March = 3,

  April = 4,

  May = 5,

  June = 6,

  July = 7,

  August = 8,

  September = 9,

  October = 10,

  November = 11,

  December = 12,
}

console.log("January:", Months.January);

console.log("February:", Months.February);

console.log("March:", Months.March);

console.log("April:", Months.April);

console.log("May:", Months.May);

console.log("June:", Months.June);

console.log("July:", Months.July);

console.log("August:", Months.August);

console.log("September:", Months.September);

console.log("October:", Months.October);

console.log("November:", Months.November);

console.log("December:", Months.December);

//b) Uma enumeração para os dias da semana.

enum Days {
  Sunday = 1,

  Monday,

  Tuesday,

  Wednesday,

  Thursday,

  Friday,

  Saturday,
}

console.log("Domingo:", Days.Sunday);

console.log("Segunda-feira:", Days.Monday);

console.log("Terça-feira:", Days.Tuesday);

console.log("Quarta-feira:", Days.Wednesday);

console.log("Quinta-feira:", Days.Thursday);

console.log("Sexta-feira:", Days.Friday);

console.log("Sábado:", Days.Saturday);

//c) Uma função recursiva para o cálculo do fatorial de um número.

function factorial(n: number): number {
  if (n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log( "Exemplo de fatorial de 3: " ,factorial(3)); // Exemplo com fatorial de 3

console.log( "Exemplo de fatorial de 5: " , factorial(5)); // Exemplo com fatorial de 5

//d) Uma definição que corresponda a definição do tipo gênero-diferença para uma pessoa que estude em uma faculdade. Utilize uma linguagem que dê suporte a herança.

class Pessoa {
  nome: string;

  idade: number;

  genero: string;

  constructor(nome: string, idade: number, genero: string) {
    this.nome = nome;

    this.idade = idade;

    this.genero = genero;
  }

  estudar() {
    console.log(`${this.nome} está estudando.`);
  }
}

class Estudante extends Pessoa {
  matricula: number;

  curso: string;

  constructor(
    nome: string,
    idade: number,
    genero: string,
    matricula: number,
    curso: string
  ) {
    super(nome, idade, genero);

    this.matricula = matricula;

    this.curso = curso;
  }

  apresentar() {
    console.log(
      `Nome: ${this.nome}, Idade: ${this.idade}, Gênero: ${this.genero}, Matrícula: ${this.matricula}, Curso: ${this.curso}`
    );
  }
}

const estudante1 = new Estudante(
  "Abner",
  26,
  "Masculino",
  456789,
  "Desenvolvimento de Software Multiplataforma"
);

estudante1.estudar();

estudante1.apresentar();
