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