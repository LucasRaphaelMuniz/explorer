// 1 declare uma varivael de nome weight
// let weight;

// 2 qual tipo de dado é a varivel acima?
// console.log(typeof weight)

/* 3 declare uma varivael e atribua valores para cada um dos dados:
    * name: String
   * age: Number (integer)
   * stars: Number (float)
  * isSubscribed: Boolean 
*/

// let name = "Lucas";
// let age = 27;
// let stars = 4.9;
// let isSubscribed = true;

/* 
  4 A variavel student abaixo é de que tipo de dado?

  4.1 atribua a ela as mesma propriedades e valores do exercicio 3

  4.2 mostre no console a seguinte mensagem:
    <name> de idade <age> pesa <weight> kg.
*/

let student = {
  name: "Lucas",
  age: 27,
  weight: 98.4,
};
// console.log(typeof student)
// console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)


/* 
  5 declare uma varivael do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
*/

let students = []

/* 
  6 Reatribua valor para a varivael acima, colocando dentro dela o objeto student da questao 4. (nao copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [
  student
]

console.log(students)

/* 
  7 coloque no console o valor da posição zero do array acima
*/

console.log(students[0])

/* 
  8 crie um novo student e coloque na posicao 1 do array students
*/

const Raphael = {
    name: "Raphael",
    age: 72,
    weight: 89.4,
};

// students = [
//   student,
//   Raphael
// ]

students[1] = Raphael

console.log(students)

/*
  9 sem rodar o codigo responda qual é a resposta do codigo abaixo e porque? apos sua resposta, rode o codigo e veja se vc acertou.
  console.log(a)
  var a = 1

  undefined, pois o valor 1 ainda nao foi atribuido
*/

console.log(a)
var a = 1