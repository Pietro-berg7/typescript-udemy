"use strict";
// 1 - campos em classes
class User {
}
const pietro = new User();
pietro.name = "Pietro";
console.log(pietro);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 20);
console.log(joao);
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
// 4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
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
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - getter
class Person {
    constructor(name, surname) {
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
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso!");
    }
    set fillY(y) {
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
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
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
    constructor() {
        this.x = 10;
    }
}
const cInstance = new C();
console.log(cInstance.x);
// 12 - protected
class D {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
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
class F extends D {
}
const eInstance = new E();
eInstance.showX();
eInstance.useMethod();
const fInstance = new F();
// fInstance.showX();
// 13 - private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        console.log(this.name);
    }
    privateMethod() {
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
    static staticMethod() {
        console.log("Este método é static!");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class
class Item {
    constructor(first, second) {
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
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
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
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);
// 18 - abstract class
class AbstractClass {
}
// const newObj = new AbstractTest()
class AbstractExample extends AbstractClass {
    constructor(name) {
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
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
