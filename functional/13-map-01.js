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