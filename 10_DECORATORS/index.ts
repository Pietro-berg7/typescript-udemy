// 1 - exemplo decorator
function myDecorator() {
  console.log("Iniciando o decorator!");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("myDecorator(): executado");
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
  };
}

class MyClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método");
  }
}

const myObj = new MyClass();

myObj.testing();
