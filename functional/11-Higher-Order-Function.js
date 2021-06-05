/*
Function that operate on other function,
either by talking them as arguments or by
returning them, are called higher-order function.
*/

function run(fn){
  //fn()
  //return fn()
  return `Result ${fn()}`
}

function sayHello(){
  console.log('Hello!')
}
run(sayHello)

run(function(){
  console.log('run!!!')
})

const result = run(Math.random)
console.log(result)