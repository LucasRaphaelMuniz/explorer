import { Modal } from "./modal.js"
import { AlertError} from "./alert-error.js"
import { notNumber, calculateIMC} from "./utils.js"

// variaveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = e => {
  e.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value
  const result = calculateIMC(weight, height)
  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)
  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }  
  AlertError.close()
  displayResultMessage(result)
  inputHeight.value = ""
  inputWeight.value = ""
}

function displayResultMessage(result) {
  let message = ""
  let messageClass = ""
  if (result < 18.5) {
    message = `Seu IMC é de ${result}`
    messageClass = 'Classficação: MAGREZA'
  } else if (result >= 18.5 && result < 25){
    message = `Seu IMC é de ${result}`
    messageClass = 'Classficação: NORMAL'
  } else if (result >= 25 && result < 30){
    message = `Seu IMC é de ${result}` 
    messageClass = 'Classficação: SOBREPESO'
  } else if (result >= 30 && result < 40){
    message = `Seu IMC é de ${result}` 
    messageClass = 'Classficação: OBESIDADE'
  } else {
    message = `Seu IMC é de ${result}` 
    messageClass = 'Classficação:  GRAVE'
  }
  Modal.message.innerText = message
  Modal.messageClass.innerText = messageClass
  Modal.open()
}


