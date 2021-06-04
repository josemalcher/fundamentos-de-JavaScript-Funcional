// Function declaration

function sayHello(){
    console.log('Helloo!');
}
sayHello()

function sayHelloTo(name){
    //console.log('Hello', name)
    console.log(`Hello ${name}`)
}
sayHelloTo('jose')

function returnHi(){
    return 'Hi'
}
let greeting = returnHi()
console.log(greeting)
console.log(returnHi())

function returnHiTo(name){
    return `Hi ${name}` 
}
console.log(returnHiTo('Jose'))
