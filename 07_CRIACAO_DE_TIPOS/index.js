"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData("teste"));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const secondObj = { name: "Carro", rodas: 4 };
const thirdObj = { price: 19.99, qty: 10 };
console.log(showProductName(myObj));
console.log(showProductName(secondObj));
const myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "Branco",
};
const myPen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul",
};
console.log(myCar);
console.log(myPen);
