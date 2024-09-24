// 1. Classe:
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }
}

// 2. Objeto:
const meuCarro1 = new Carro("Fusca");

// 3. Atributo:
console.log(meuCarro.modelo);  // Saída: Fusca

// 4. Método:
class Carro {
  constructor(modelo) {
    this.modelo = modelo;
  }

  exibirModelo() {
    console.log(this.modelo);
  }
}

const meuCarro = new Carro("Fusca");
meuCarro.exibirModelo();  // Saída: Fusca


// 5. Herança:
class Veiculo {
  constructor(tipo) {
    this.tipo = tipo;
  }
}

class Carro extends Veiculo {
  constructor(modelo) {
    super("Carro");
    this.modelo = modelo;
  }
}

// 6. Polimorfismo:
class Animal {
  fazerSom() {
    console.log("Som do animal");
  }
}

class Cachorro extends Animal {
  fazerSom() {
    console.log("Latido");
  }
}

class Gato extends Animal {
  fazerSom() {
    console.log("Miau");
  }
}

function emitirSom(animal) {
  animal.fazerSom();
}

emitirSom(new Cachorro());  // Saída: Latido
emitirSom(new Gato());      // Saída: Miau