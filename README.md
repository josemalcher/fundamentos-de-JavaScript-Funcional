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
8. Desafio #01
9. Desafio #01 - Resposta

[Voltar ao Índice](#indice)

---


## <a name="parte3">3 - Seção 3: Programação Funcional</a>

10. First-Class Function
11. Higher-Order Function #01
12. Higher-Order Function #02
13. Map #01
14. Map #02
15. Filter #01
16. Filter #02
17. Reduce #01
18. Reduce #02
19. Map, Filter e Reduce
20. Aula Bônus

[Voltar ao Índice](#indice)

---

