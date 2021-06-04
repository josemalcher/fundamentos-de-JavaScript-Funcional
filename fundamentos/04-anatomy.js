// Anonymous Function

(function(a,b){
    return a + b
})
 // function expression
 const sum = function(a,b){
     return a + b
 }
 const result = sum(5, 5);
 console.log(result)

 const anotherSum = sum
 console.log(anotherSum(10,10))
