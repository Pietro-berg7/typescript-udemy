"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste";
const nomes = ["Pietro", "Matheus"];
// nomes.push(4);
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste");
console.log(nums[0], nums[5]);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Pietro" }];
console.log(arr1);
arr1.push([1, 2, 3]);
// 4 - parâmetros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b");
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Pietro"));
// 6 -  função anonima
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary));
    // console.log(sallary);
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
const pessoaObj = {
    name: "Pietro",
    surname: "Bergamaschi",
};
