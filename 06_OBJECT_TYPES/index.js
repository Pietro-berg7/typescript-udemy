"use strict";
function showProductDetails(product) {
  console.log(
    `O nome do produto é ${product.name}, seu preço é R$${product.price}`
  );
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
