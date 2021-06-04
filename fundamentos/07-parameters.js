function logParams(a,b,c){
  console.log(a,b,c)
}
logParams(1,2,3,4,5) // 1 2 3
logParams(2,3) // 2 3 undefined
logParams(2) // 2 undefined undefined
logParams() // undefined undefined undefined

function defaultParams(a,b,c = 0){
  console.log(a,b,c)
}
defaultParams(1,2) // 1 2 0
defaultParams(1) // 1 undefined 0

// spred/rest
function logNums(...nums){
  console.log(Array.isArray(nums))
  console.log(nums)
  // for(let n of nums){
  //   console.log(n)
  // }
}
logNums(10,20,30)
/*
true
10
20
30
--------
true
[ 10, 20, 30 ]
*/

function sumALL(...nums){
  let total = 0;
  for(let n of nums){
    total += n
  }
  return total
}
console.log(sumALL(1,2,3,4,5,6,7,8,9)) // 45