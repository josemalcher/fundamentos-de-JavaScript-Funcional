/*
A programming language is sair to have
First-class functions when functions in
that language are treated like any other variable.
*/

const add = function(a, b){
  return a + b
}
console.log(add(10,20))

const subtract = function(a,b){
  return a - b
}
console.log(subtract(30,20))

const multiply = (x, y) => x * y
console.log(multiply(10,20))

