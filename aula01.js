// Paradigmas da programação: existem vários paradigmas (procedural, declarativo, lógico, orientado a objetos, funcional, orientado a eventos), e por vezes as linguagens de programação conseguem suportar mais de um dos paradigmas.

// Principais princípios da programação orientada a objetos: Abstração, Encapsulamento, Herança e Polimorfismo; 
// Abstração: capacidade de imaginar e definir o comportamento de um objeto que representa uma classe de algo do mundo real dentro do nosso sistema;
// > Deve ser possível identificar uma classe;
// > Deve ser possível identificar as características do objeto, na POO chamamos de atributos;
// > Deve ser possível identificar as ações que aquele objeto pode emitir, na POO chamamos de métodos;
// > A classe é a abstração, o objeto é a instanciação da classe, ou seja, 'let theObj = new Classe(atributos)';

// Encapsulamento: capacidade de criar mecanismos de segurança para as propriedades, evitando o acesso direto;
// Em JS, para tornar um atributo privado, é necessário colocar '#' na frente:

class Animal {
  #origem;
  constructor(tamanho, peso) {
    this.tamanho = tamanho;
    this.peso = peso;
  }
  dorme() {
    console.log('Dormindo zzzzzzzzzz');
    return '';
  }
  fazSom() {
    console.log('Sons?');
    return '';
  }
  set origem(origem) {
    this.#origem = origem;
  }
  get origem() {
    return `O animal vem de ${this.#origem}`;
  }
}

let doguin = new Animal('Pequeno', 40);
console.log(doguin.dorme());
console.log(doguin.fazSom());
// console.log(doguin.#origem); // aqui resulta em erro, sendo como funciona o encapsulamento;
// para atribuir a origem é necessário utilizar o setter, da seguinte forma:
doguin.origem = 'Bélgica';
// e o getter é utilizado da mesma forma:
console.log(doguin.origem);

// Herança: cada 'classe filha' extende a 'classe pai', herdando os atributos e métodos da mesma;
// > Para adicionar novos atributos, é necessário chamar o super dentro de constructor;
// > É possível adicionar novos métodos sem o super;

// Polimorfismo: é possível dar uma nova forma ao método (chamamos de sobrescrever o método):

class Cao extends Animal {
  fazSom() {
    console.log('AU AU AU AU');
  }
  abanarabo() {
    console.log('Abanando o rabo');
  }
}

class Lobo extends Animal {
  fazSom() {
    console.log('AUUUUUUUUUUUUUUU');
  }
  fazchacina() {
    console.log('Fazendo chacina');
  }
}

class Gato extends Animal {
  fazSom() {
    console.log('MIAU');
  }
  ronrona() {
    console.log('PRRRRRR');
  }
  constructor() {
    super();
    this.bigodes = 'tem bigodes? ' + true;
  }
}

let caozin = new Cao('Grande', 200);
caozin.origem = 'Brazil';
console.log('CAOZIN:');
console.log(caozin.origem);
console.log(caozin.dorme());
console.log(caozin.fazSom());
console.log(caozin.abanarabo());
console.log('----------------');

let lobin = new Lobo('Imenso', 500);
lobin.origem = 'HIMALAIA';
console.log('LOBIN:');
console.log(lobin.origem);
console.log(lobin.dorme());
console.log(lobin.fazSom());
console.log(lobin.fazchacina());
console.log('----------------');

let gatin = new Gato('Médio', 80);
gatin.origem = 'Alemanha';
console.log('GATIN:');
console.log(gatin.origem);
console.log(gatin.dorme());
console.log(gatin.fazSom());
console.log(gatin.ronrona());
console.log(gatin.bigodes);