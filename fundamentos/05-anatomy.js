// function expression
const increment1 = function(n){
  return n + 1
}

// ARROW Function is always anonymous
const increment2 = (n) => { 
  return n + 1
}

const increment3 = n => { 
  return n + 1
}

const increment4 = n => n + 1

console.log(increment1(1))
console.log(increment2(21))
console.log(increment3(31))
console.log(increment4(41))

const sum = (a , b ) => a + b
console.log(sum(50,50))