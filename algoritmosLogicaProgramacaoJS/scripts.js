/* 
# Sobre o desafio

<aside>
💡 Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos;

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

const students = [
  {
    name: "Lucas",
    notaP1: 67,
    notaP2: 80,
  },
  {
    name: "Raphael",
    notaP1: 45,
    notaP2: 55,
  },
  {
    name: "Muniz",
    notaP1: 45,
    notaP2: 75,
  },
]

function media(notaP1, notaP2) {
  return ((notaP1 + notaP2) / 2).toFixed(2);
}

for (let student of students) {
  let notaFinal = media(student.notaP1, student.notaP2);
  let finalResult = notaFinal > 70

  if (finalResult) {
    alert(`
      A média do Aluno(a) ${student.name} é: ${notaFinal}
      Parabéns, ${student.name}! Você foi aprovado no concurso!
      `)
  } else {
    alert(`
      A média do Aluno(a) ${student.name} é: ${notaFinal}
      Não foi dessa vez, ${student.name}! Tente novamente.
      `)
  }
}

