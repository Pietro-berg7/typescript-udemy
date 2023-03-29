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
