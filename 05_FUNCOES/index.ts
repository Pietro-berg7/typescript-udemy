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
