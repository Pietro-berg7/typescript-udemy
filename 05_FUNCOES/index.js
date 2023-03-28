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
