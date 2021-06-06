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