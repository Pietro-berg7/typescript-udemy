// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`;
}

console.log(showData(5));
console.log(showData("teste"));

// 2 - constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };
const secondObj = { name: "Carro", rodas: 4 };
const thirdObj = { price: 19.99, qty: 10 };

console.log(showProductName(myObj));
console.log(showProductName(secondObj));
// console.log(showProductName(thirdObj))

// 3 - generics com interface
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = {
  name: "Fusca",
  wheels: 4,
  engine: 1.0,
  color: "Branco",
};
const myPen: Pen = {
  name: "Caneta BIC",
  wheels: false,
  engine: false,
  color: "Azul",
};

console.log(myCar);
console.log(myPen);

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key.toString()} está presente no objeto e tem o valor de ${
    obj[key]
  }`;
}

const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram"));
// console.log(getSomeKey(server, "teste"));

// 5 - keyof type operator
type Character = { name: string; age: number; hasDriveLicense: boolean };

type C = keyof Character;

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`;
}

const myChar: Character = {
  name: "Pietro",
  age: 22,
  hasDriveLicense: false,
};

console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// console.log(showCharName([0]))

// 6 - typeof type operator
const userName: string = "Pietro";

const userName2: typeof userName = "João";

// const userName3: typeof userName = 3

type x = typeof userName;

const userName4: x = "Joaquim";

// 7 - indexed access types
type Truck = { km: number; kg: number; description: string };

type Km = Truck["km"];

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga",
};

function showKm(km: Km) {
  console.log(`O veículo tem a km de: ${km}`);
}

showKm(newTruck.km);

const newCar = {
  km: 5000,
  kg: 1000,
};

showKm(newCar.km);

// 8 - conditional types
interface A {}

interface B extends A {}

interface Teste {
  showName(): string;
}

type myType = B extends A ? number : string;

const someVar: myType = 1;
// const someVar2: myType = 'asd'

type myTypeB = Teste extends { showNumber(): number } ? string : boolean;

// 9 - template literal types

type TestA = "text";

type CustomType = `some ${TestA}`;

const testing: CustomType = "some text";
// const testing2: CustomType = "some text 2";

type a1 = "Testando";
type a2 = "Union";

type a3 = `${a1}` | `${a2}`;
