# Fundamentos de JavaScript Funcional

https://www.udemy.com/course/fundamentos-de-javascript-funcional/

Função é ESSENCIAL em JavaScript! Por isso dominar o uso de função é um REQUISITO BÁSICO para todos os desenvolvedores!

## <a name="índice">Índice</a>

1. [Seção 1: Introdução](#parte1)     
    - Introdução
2. [Seção 2: Fundamentos](#parte2)     
    - Explicações Iniciais
    - Anatomia da Função #01
    - Anatomia da Função #02
    - Anatomia da Função #03
    - Anatomia da Função #04
    - Parametros
    - Desafio #01
    - Desafio #01 - Resposta
3. [Seção 3: Programação Funcional](#parte3)     
    - First-Class Function
    - Higher-Order Function #01
    - Higher-Order Function #02
    - Map #01
    - Map #02
    - Filter #01
    - Filter #02
    - Reduce #01
    - Reduce #02
    - Map, Filter e Reduce
    - Aula Bônus

---


## <a name="parte1">1 - Seção 1: Introdução</a>

1. Introdução

[Voltar ao Índice](#indice)

---


## <a name="parte2">2 - Seção 2: Fundamentos</a>

2. Explicações Iniciais
   
- VS CODE - CODE RUNNER

3. Anatomia da Função #01

- [fundamentos\03-anatomy.js](fundamentos\03-anatomy.js)

```javascript
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

```

4. Anatomia da Função #02

- [fundamentos\04-anatomy.js](fundamentos\04-anatomy.js)

```javascript
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

```

5. Anatomia da Função #03

- [fundamentos\05-anatomy.js](fundamentos\05-anatomy.js)

```javascript
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
```

6. Anatomia da Função #04

- [fundamentos\06-anatomy.js](fundamentos\06-anatomy.js)

```javascript
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
```

7. Parâmetros

- [fundamentos\07-parameters.js](fundamentos\07-parameters.js)

```javascript
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
```

8. Desafio #01
9. Desafio #01 - Resposta

- [fundamentos\08-chanllege.js](fundamentos\08-chanllege.js)

```javascript
//create function
function range(a , b , s = 1){
  const n1   = b === undefined ? 1 : a;
  const n2   = b === undefined ? a : b;
  const step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

  const nums = [];
  for(let i = n1 ; n1 <= n2 ? i <= n2 : i >= n2 ; i += step){
    nums.push(i);
  }
  return nums;
}

// range(5) -> [1,2,3,4,5]
console.log(range(5))

// range(6,11) -> [6,7,8,9,10,11]
console.log(range(6,11))
// range(10,19,2) -> [10,12,14,16,18]
console.log(range(10,19,2))
// range(6,2) -> [6,5,4,3,2]
console.log(range(6,2))
// range(8,-3, 4) -> [8,4,0]
console.log(range(8,-3, 4))
```

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Seção 3: Programação Funcional</a>

10. First-Class Function

- [functional\10-First-Class-Function.js](functional\10-First-Class-Function.js)

```javascript
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

```

11. Higher-Order Function #01

- [functional\11-Higher-Order-Function.js](functional\11-Higher-Order-Function.js)

```javascript
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
```

12. Higher-Order Function #02

- [functional\12-Higher-Order-Function.js](functional\12-Higher-Order-Function.js)

```javascript
// curring
function finalPrice(tax){
  return function(price){
    return price * (1 + tax)
  }
}

const nycFinalPrice = finalPrice(0.0875)

console.log(nycFinalPrice(25.1))
console.log(nycFinalPrice(21.1))
console.log(nycFinalPrice(107.9))
```

13. Map #01

![map](functional\img\map-01.png)

14. Map #02

- [functional\13-map-01.js](functional\13-map-01.js)

```javascript
const numbers = [1,2,3,4,5,6]
const numbersV2 = numbers.map(el => el * 2)

console.log(numbers, numbersV2) 
// [ 1, 2, 3, 4, 5, 6 ] [ 2, 4, 6, 8, 10, 12 ]

const students = [
  {name:  'Jose',   score: 6.8},
  {name:  'Marcel', score: 9.8},
  {name:  'Giga',   score: 7.8},
  {name:  'Duda',   score: 4.8}
]

const getScore = el => el.score

//const result = students.map(getScore)
//console.log(result) // [ 6.8, 9.8, 7.8, 4.8 ]
const result = students.map(getScore).map(Math.ceil)
console.log(result) // [ 7, 10, 8, 5 ]
```

15. Filter #01

![functional\img\filter-01.png](functional\img\filter-01.png)

16. Filter #02

- [functional\16-filter-01.js](functional\16-filter-01.js)

```javascript
const numbers = [1,2,3,4,5,6]

console.log(numbers.filter(el => el > 0)) // [ 1, 2, 3, 4, 5, 6 ]

const greaterThanZero = el => el > 0
console.log(numbers.filter(greaterThanZero)) // [ 1, 2, 3, 4, 5, 6 ]

const greaterThanTen = el => el > 10
console.log(numbers.filter(greaterThanTen))// []

const even = el => el % 2 === 0 
console.log(numbers.filter(even)) // [ 2, 4, 6 ]

const students = [
  {name:  'Jose',   score: 6.8},
  {name:  'Marcel', score: 9.8},
  {name:  'Giga',   score: 7.8},
  {name:  'Duda',   score: 4.8}
]

const greaterStudent = students => students.score >= 9
console.log(students.filter(greaterStudent))// [ { name: 'Marcel', score: 9.8 } ]
console.log(students)
/* 
[
  { name: 'Jose', score: 6.8 },
  { name: 'Marcel', score: 9.8 },
  { name: 'Giga', score: 7.8 },
  { name: 'Duda', score: 4.8 }
]
*/
```

17. Reduce #01

![Reduce](functional\img\reduce-01.png)

![Reduce 2](functional\img\reduce-02.png)

18. Reduce #02

- [functional\18-reduce01.js](functional\18-reduce01.js)

```javascript
const numbers = [1,2,3,4,5,6]

const sum = (total, el) => total + el
const total = numbers.reduce(sum, 100)
console.log(total) // 121

const avg = (acc, el, i, array) => {
  if( i  === array.length - 1){
    return (acc + el ) / array.length
  }else{
    return acc + el
  }
}
//const result = numbers.reduce(avg)
console.log(numbers.reduce(avg)) // 3.5
```

19. Map, Filter e Reduce

- [functional\19-map-filter-reduce.js](functional\19-map-filter-reduce.js)

```javascript
const students = [
  {name:  'Jose',   score: 6.8},
  {name:  'Marcel', score: 9.8},
  {name:  'Giga',   score: 7.8},
  {name:  'Duda',   score: 4.8}
]

const greatStudent = student             => student.score >= 7
const getScore     = el                  => el.score
const avg          = (acc, el, i, array) => {
  if( i  === array.length - 1){
    return (acc + el ) / array.length
  }else{
    return acc + el
  }
}

console.log(
  students
    .filter(greatStudent)
    .map(getScore)
    .reduce(avg)
)
```

20. Aula Bônus

[Bônus - 54 aulas Gratuitas + Certificado](https://bit.ly/3kJfdDB)

21. Desafio Map, Reduce e Filter

22. Desafio Map, Reduce e Filter - Resposta

- [Bonus-curso-cursocod3r\21-desafio_map-reduce-filter.js](Bonus-curso-cursocod3r\21-desafio_map-reduce-filter.js)

```javascript
const carrinho = [
  {nome: 'caneta', qde: 10, preco: 1.99, fragil: false},
  {nome: 'Impressora', qde: 1, preco: 89.99, fragil: true},
  {nome: 'caderno', qde: 3, preco: 2.99, fragil: true},
  {nome: 'Lapis', qde: 100, preco: 1.9, fragil: false},
  {nome: 'Tesoura', qde: 30, preco: 2.99, fragil: true},
]

// filter, map, reduce

// 1. fragil: true
// 2. qde * preco 27.10 -> total
// 3. medida totais

const isfragil = item => item.fragil
const getTotal = item => item.qde * item.preco
const getMedia = (acc, el) => {
  const novaQtde  = acc.qde + 1
  const novoTotal = acc.total + el
  return {
    qde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde
  } 
}
const mediaInicial = {qde: 0, total: 0, media: 0}

const media = carrinho
                      .filter(isfragil)
                      .map(getTotal)
                      .reduce(getMedia, mediaInicial)
                      .media

console.log(`A média é ${media}`)
```


23. Função Reduce #03

24. Promise #01

- [Bonus-curso-cursocod3r\24-Promise.js](Bonus-curso-cursocod3r\24-Promise.js)

```javascript
const primeiroElemento = arrayOuString => arrayOuString[0]
const letraMinuscula   = letra => letra.toLowerCase()

new Promise(function(resolve){
  resolve(['Ana', 'Maria', 'Bia', 'Carlos'])
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  //.then(v => console.log(v))
  .then(console.log)
```

25. Promise #02

- [Bonus-curso-cursocod3r\25-Promise.js](Bonus-curso-cursocod3r\25-Promise.js)

```javascript
function esperandoPor(tempo = 2000){
  return new Promise(function(resolve){
    setTimeout(function(){
      console.log('Executando promisse...')
      resolve()
    }, tempo)
  })
}

esperandoPor()
              .then(()=> esperandoPor())
              .then(esperandoPor)
```

26. Promise #03

- [Bonus-curso-cursocod3r\26-Promise.js](Bonus-curso-cursocod3r\26-Promise.js)

```javascript
function gerarNumerosEntre(min, max){
  if(min > max) [max, min] = [min, max]
  return new Promise(resolve =>{
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
  })
}

gerarNumerosEntre(1,60)
                       .then(num => num * 10)
                       .then(numX10 => `O numero gerado foi ${numX10}`)
                       .then(console.log)
```

27. Desafio Promise

28. Desafio Promise - Resposta

29. Promise #04

30. Promise #05

31. Async/Await #01

32. Async/Await #02

33. OO #01

34. OO #02

35. OO #03

36. Conclusão do Módulo

37. Conclusão - 1/1


[Voltar ao Índice](#indice)

---

