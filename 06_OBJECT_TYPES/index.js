"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name}, seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("Este produto está disponível!");
    }
}
const shirt = {
    name: "Camisa",
    price: 29.99,
    isAvailable: true,
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`E-mail do usuário: ${user.email}`);
    if (user.role) {
        console.log(`Sua função no sistema é de: ${user.role}`);
    }
}
const u1 = { email: "pietro@teste.com", role: "Admin" };
const u2 = { email: "betotle@teste.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
let coords = {
    x: 10,
};
// coords.y = 'teste'
coords.y = 15;
console.log(coords);
const arr1 = [1, 2, 3];
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
