"use strict";
// 1 - funcoes sem retorno
function withoutReturn() {
    console.log("Não tem retorno");
    // return 1
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}!`;
}
function preGreeting(f, userName) {
    console.log("Preparando a saudação!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Pietro");
preGreeting(greeting, "João");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement([true, false]));
console.log(firstElement([]));
// firstElement('a')
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObj = mergeObjects({ name: "Pietro" }, { age: 22, job: "Programmer" });
console.log(newObj);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 2));
console.log(biggestNumber("10", "5"));
