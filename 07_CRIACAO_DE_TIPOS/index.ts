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