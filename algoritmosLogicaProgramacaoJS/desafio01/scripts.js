/*
# Sobre o desafio

<aside>
💡 O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
*/


let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

modImparPar = (sum % 2)
resultImparPar = modImparPar == 0

numerosIguais = firstNumber == secondNumber

alert('A soma dos dois números é: ' + sum)
alert('A Subtração dos dois números é: ' + sub)
alert('A Multiplicação dos dois números é: ' + multi)
alert('A Divisão dos dois números é: ' + div)
alert('A Resto da divisão dos dois números é: ' + restDiv)


if (resultImparPar) {
  alert("A soma dos números é par")
} else {
  alert("A soma dos números é impar")  
}

if (numerosIguais) {
  alert("Os dois números são iguais")
} else {
  alert("Os dois números são diferentes")  
}

