// Anonymous function
// IIFE - Immediately Invoked Function Expression

(function(a,b,c){
  console.log(`Result ${a + b + c}`)
})(10,20,30);

(function(){
  let x = 200
  console.log(x)
})();

(()=> {
  console.log('arrow #1')
})();

(() => console.log('arrow #2'))();