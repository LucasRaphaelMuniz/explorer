// function expression
// function anonymous

let total = 0

// parametros (parameters)
const sum = function(number1, number2) {
  let total = number1 + number2
  return total
}

let number1 = 34
let number2 = 23
sum(number1, number2) // arguments 

console.log(`o numero 1 é ${number1}`)
console.log(`o numero 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)
console.log(`a soma é ${total}`)

// função é um "liquidificador"

function fazerSuco(fruta1, fruta2) {
  return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')

console.log(copo)