"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
sum(1, 2);
sum("4", "4");
sum("5", 1);
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Por favor, defina uma operação!");
    }
}
operations([10, 20, 30], "sum");
operations([10, 20, 30], "multiply");
operations([10, 20, 30], "");
// 3 - instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}!`);
    }
}
userGreeting(jhon);
userGreeting(paul);
