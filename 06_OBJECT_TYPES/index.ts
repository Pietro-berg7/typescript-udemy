// 1 - tipo de objeto para funções
interface Product {
  name: string;
  price: number;
  isAvailable: true;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name}, seu preço é R$${product.price}`
  );
  if (product.isAvailable) {
    console.log("Este produto está disponível!");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 29.99,
  isAvailable: true,
};

showProductDetails(shirt);

// 2 - propriedade opcional em interface
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`E-mail do usuário: ${user.email}`);
  if (user.role) {
    console.log(`Sua função no sistema é de: ${user.role}`);
  }
}

const u1 = { email: "pietro@teste.com", role: "Admin" };
const u2 = { email: "betotle@teste.com" };

showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

// coords.y = 'teste'
coords.y = 15;

console.log(coords);

interface OnlyNumberArray {
  [index: number]: number;
}

const arr1: OnlyNumberArray = [1, 2, 3];
// const arr2: OnlyNumberArray = ['1', '2', '3']

// 5 - extending types
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);

// 6 - intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);

// 7 - read only array

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Pêra"];

// myArray[3] = 'Mamão'

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);
