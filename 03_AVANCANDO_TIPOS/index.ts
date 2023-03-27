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
