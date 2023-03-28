// 1 - arrays
let numbers: number[] = [1, 2, 3];

numbers.push(5);

console.log(numbers[2]);

// numbers = "teste";

const nomes: string[] = ["Pietro", "Matheus"];

// nomes.push(4);

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);

// nums.push("teste");

console.log(nums[0], nums[5]);

// 3 - any
const arr1: any = [1, "teste", true, [], { nome: "Pietro" }];

console.log(arr1);

arr1.push([1, 2, 3]);

// 4 - parâmetros tipados
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(4, 5);
// soma("a", "b");

// 5 - retorno de função
function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Pietro"));

// 6 -  função anonima
setTimeout(function () {
  const sallary: number = 1000;

  // console.log(parseFloat(sallary));

  // console.log(sallary);
}, 2000);

// 7 - tipos de objeto
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 84.2 };

passCoordinates(objCoord);

const pessoaObj: { name: string; surname: string } = {
  name: "Pietro",
  surname: "Bergamaschi",
};

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a);
  console.log("B: " + b);
  if (c) {
    console.log("C: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - validação de props opcionais
function advancedGreeting(firstname: string, lastname?: string) {
  if (lastname !== undefined) {
    return `Olá ${firstname} ${lastname}, tudo bem?`;
  }

  return `Olá ${firstname}, tudo bem?`;
}

console.log(advancedGreeting("Pietro", "Bergamaschi"));
console.log(advancedGreeting("Betotle"));

// 10 - union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [1, "teste", true];

// 11 - avançando em union types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }

  return `A função do usuário é: ${role}`;
}

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12 - type alias
type ID = string | number;

function showId(id: string | ID) {
  console.log(`O ID é: ${id}`);
}

showId(1);
showId("200");

// 13 - interfaces
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}

const itemCoords = {
  x: 10,
  y: 15,
  z: 12,
};

showCoords(itemCoords);

// 14 - interface x type alias

interface Person {
  name: string;
}

const randomNumber = 10;

interface Person {
  age: number;
}

const somePerson: Person = { name: "João", age: 25 };

console.log(somePerson);

type personType = {
  name: string;
};

// type personType = {
//     age: number
// }
