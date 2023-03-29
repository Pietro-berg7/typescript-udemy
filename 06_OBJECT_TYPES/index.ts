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
