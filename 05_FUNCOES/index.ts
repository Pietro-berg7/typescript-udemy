// 1 - funcoes sem retorno
function withoutReturn(): void {
  console.log("Não tem retorno");
  // return 1
}

withoutReturn();

// 2 - callback como argumento
function greeting(name: string): string {
  return `Olá ${name}!`;
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a saudação!");
  const greet = f(userName);
  console.log(greet);
}

preGreeting(greeting, "Pietro");
preGreeting(greeting, "João");

// 3 - generic function
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement([true, false]));
console.log(firstElement([]));
// firstElement('a')

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObj = mergeObjects({ name: "Pietro" }, { age: 22, job: "Programmer" });

console.log(newObj);

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 2));
console.log(biggestNumber("10", "5"));
