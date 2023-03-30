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

// 5 - métodos
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey Stranger!");
  }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy.name);

jimmy.greeting();

console.log(jimmy);

// 6 - this
class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`
    );
  }
}

const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);

volvo.showDetails();
scania.showDetails();

// 7 - getter
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return this.name + " " + this.surname;
  }
}

const pietroBergamaschi = new Person("Pietro", "Bergamaschi");

console.log(pietroBergamaschi.fullName);

// 8 - setter
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;

    console.log("X inserido com sucesso!");
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }

    this.y = y;

    console.log("Y inserido com sucesso!");
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`;
  }
}

const myCoords = new Coords();

myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;

console.log(myCoords);
console.log(myCoords.getCoords);

// 9 - implements
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título do post é: ${this.title}`;
  }
}

const myPost = new blogPost("Hello World");

console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O título é: ${this.title}`;
  }
}

// 10 - override de métodos
class Base {
  someMethod() {
    console.log("Alguma coisa!");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("Outra coisa!");
  }
}

const myNewClass = new Nova();

myNewClass.someMethod();

// 11 - public
class C {
  public x = 10;
}

const cInstance = new C();

console.log(cInstance.x);

// 12 - protected
class D {
  protected x = 10;

  protected protectedMethod() {
    console.log("Estou protegido!");
  }
}

class E extends D {
  showX() {
    console.log("X: " + this.x);
  }

  useMethod() {
    this.protectedMethod();
  }
}

class F extends D {}

const eInstance = new E();

eInstance.showX();

eInstance.useMethod();

const fInstance = new F();

// fInstance.showX();

// 13 - private
class PrivateClass {
  private name = "Private";

  showName() {
    console.log(this.name);
  }

  private privateMethod() {
    console.log("Sou privado!");
  }

  showPrivateMethodResult() {
    this.privateMethod();
  }
}

const pClass = new PrivateClass();

pClass.showName();

pClass.showPrivateMethodResult();

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }

// 14 - static members
class StaticMembers {
  static prop = "Teste static";

  static staticMethod() {
    console.log("Este método é static!");
  }
}

console.log(StaticMembers.prop);

StaticMembers.staticMethod();

// 15 - generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first é: ${this.first}`;
  }
}

const newItem = new Item("caixa", "surpresa");

console.log(newItem.showFirst);

// 16 - parameter properties
class ParameterClass {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `Qtd total: ${this.qty}`;
  }

  get showPrice() {
    return `Preço: R$${this.price}`;
  }
}

const newShirt = new ParameterClass("Camisa", 5, 19.99);

console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

// console.log(newShirt.price)

// 17 - class expression
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Jones");

console.log(pessoa);
console.log(pessoa.name);

// 18 - abstract class
abstract class AbstractClass {
  abstract showName(): void;
}

// const newObj = new AbstractTest()

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome é: ${this.name}`);
  }
}

const newObjAbstract = new AbstractExample("Josias");

newObjAbstract.showName();

// 19 - relacoes entre classes
class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();

console.log(doguinho);
