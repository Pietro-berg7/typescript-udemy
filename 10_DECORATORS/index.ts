// 1 - exemplo decorator
function myDecorator() {
  console.log("Iniciando o decorator!");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("myDecorator(): executado");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método");
  }
}

const myObj = new MyClass();

myObj.testing();

// 2 - multiplos decorators
function a() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou a.");
  };
}

function b() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou b.");
  };
}

function c() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou c.");
  };
}

class MultipleDecorators {
  @c()
  @a()
  @b()
  testing() {
    console.log("Terminando execução do método");
  }
}

const multiple = new MultipleDecorators();

multiple.testing();

// 3 - class decorator
function classDec(constructor: Function) {
  console.log(constructor.name);

  if (constructor.name === "User") {
    console.log("Criando usuário!");
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const pietro = new User("Pietro");

console.log(pietro);

// 4 - method decorator
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine("Trator");

console.log(trator.showName());
