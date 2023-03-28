const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btnOpen")
const btnAgain = document.querySelector("#btnAgain")

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

screen1.addEventListener('click', handleClickOpen)
screen2.addEventListener('click', handleResetClick)


function handleClickOpen(event) {
  event.preventDefault()
  screen1.classList.add("hide")
  screen2.classList.remove("hide")
  const fraseAleatoria = fraseBiscoito();
  document.querySelector(".screen2 h3").innerText = fraseAleatoria
  console.log(fraseAleatoria)
}


function handleResetClick() {
  toggleScreen()
}

function fraseBiscoito() {
  const frasesBiscoitoSorte = [
    "A vida é uma jornada, não um destino final.",
    "Não fique triste, tudo vai dar certo.",
    "Boas coisas acontecem para aqueles que trabalham duro.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Siga seus sonhos e o universo irá ajudá-lo a alcançá-los.",
    "Seja a mudança que você deseja ver no mundo.",
    "Você tem a chave da sua felicidade.",
    "Acredite em si mesmo e tudo será possível.",
    "A sorte favorece os corajosos.",
    "Cada dia é uma nova oportunidade para ser feliz.",
    "Não tenha medo de tentar coisas novas.",
    "Aprenda com seus erros e siga em frente.",
    "A vida é uma montanha-russa, aproveite o passeio.",
    "A felicidade não é algo pronto, é algo que você cria.",
    "A verdadeira beleza vem de dentro.",
    "A paciência é uma virtude.",
    "Tudo é possível se você acreditar em si mesmo.",
    "Acredite em seus sonhos e trabalhe duro para torná-los realidade.",
    "A vida é curta, aproveite cada momento.",
    "O sucesso não é um acidente, é uma escolha."
  ];

  numeroAleatorio = Math.floor(Math.random() * 20);
  fraseAleatoria = frasesBiscoitoSorte[numeroAleatorio]
  return fraseAleatoria;
}


