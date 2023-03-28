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
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validação de props opcionais
function advancedGreeting(firstname, lastname) {
    if (lastname !== undefined) {
        return `Olá ${firstname} ${lastname}, tudo bem?`;
    }
    return `Olá ${firstname}, tudo bem?`;
}
console.log(advancedGreeting("Pietro", "Bergamaschi"));
console.log(advancedGreeting("Betotle"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
const arr2 = [1, "teste", true];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const itemCoords = {
    x: 10,
    y: 15,
    z: 12,
};
showCoords(itemCoords);
const somePerson = { name: "João", age: 25 };
console.log(somePerson);
// type personType = {
//     age: number
// }
// 15 - literal types
let test;
test = "testando";
// test = "opa"
function showDirection(direction) {
    console.log(`The direction is: ${direction}`);
}
showDirection("left");
showDirection("center");
//showDirection("up")
// 16 - non-null assertion
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - big int
let n;
// n = 1
n = 1000n;
// console.log(n + 1)
console.log(n + 10n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA === symbolB);
