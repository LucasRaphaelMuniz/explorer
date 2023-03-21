// // function expression
// // function anonymous

// let total = 0

// // parametros (parameters)
// const sum = function(number1, number2) {
//   let total = number1 + number2
//   return total
// }

// let number1 = 34
// let number2 = 23
// sum(number1, number2) // arguments 

// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
// console.log(`a soma é ${sum(number1, number2)}`)
// console.log(`a soma é ${total}`)

// // função é um "liquidificador"

// function fazerSuco(fruta1, fruta2) {
//   return fruta1 + fruta2
// }

// const copo = fazerSuco('banana', 'maçã')

// console.log(copo)



// // criar aplicativo de frases
// // declaration - declaração da função
// // function statemtn
// function createPhrases() {
//   console.log('Estudar é bom')
//   console.log('ser um dev')
// }

// // executar a função
// createPhrases()
// createPhrases()
// createPhrases()

// console.log('fim')



// // function scope

// let subject = 'create video'

// function createThink(subject) {
//   subject = 'study'
//   return subject
// }

// console.log(subject)
// console.log(createThink(subject))




// // function hoisting

// sayMyName()
// function sayMyName() {
//   console.log('Lucas')
// }



// // arrow function

// const sayMyName = () => {
//   console.log('muniz')
// }

// sayMyName()


// // callback funcion

// function sayMyName(name) {
//   console.log(name)
// }

// sayMyName(
//   () => {
//     console.log('callback')
//   }
// )

// // function constructor

// function Person(name) {
//   this.name = name
//   this.walk = function() {
//     return this.name + "está andando"
//   }
// }
// const lucas = new Person("Lucas")
// const raphael = new Person("Raphael")
// console.log(lucas.walk())
// console.log(raphael.walk())