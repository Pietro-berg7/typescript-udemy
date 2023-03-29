// 1 - campos em classes
class User {
  name!: string;
  age!: number;
}

const pietro = new User();

pietro.name = "Pietro";

console.log(pietro);

// 2 - constructor
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("João", 20);

console.log(joao);

// 3 - campo readonly
class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

console.log(fusca);

console.log(fusca.wheels);

// 4 - herança e super
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);
