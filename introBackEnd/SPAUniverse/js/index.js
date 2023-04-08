import {Router} from "./router.js"
const router = new Router()
router.add("/", "/pages/home.html")
router.add("/oUniverso", "/pages/oUniverso.html")
router.add("/exploracao", "/pages/exploracao.html")
router.add(404, "/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()

const btnHomeExploracao = document.querySelector('.btnMenuExploracao');

const btnHome = document.querySelector('.menuHome');
const btnUniverso = document.querySelector('.menuOUniverso');
const btnExploracao = document.querySelector('.menuExploracao');



if(btnHomeExploracao){
  btnHomeExploracao.addEventListener('click', function(){
    buttonExploracao()
  })
}
btnHome.addEventListener('click', function(){
  buttonHome()
})
btnUniverso.addEventListener('click', function(){
  buttonUniverso()

})
btnExploracao.addEventListener('click', function(){
  buttonExploracao()
  
})


function buttonHome(){
  btnUniverso.classList.remove('active');
  btnExploracao.classList.remove('active');
  btnHome.classList.add('active');
  document.body.style.backgroundImage = "url('../images/uni1.png')"
}

function buttonUniverso(){
  btnUniverso.classList.add('active');
  btnExploracao.classList.remove('active');
  btnHome.classList.remove('active');
  document.body.style.backgroundImage = "url('../images/uni2.png')"

}

function buttonExploracao(){
  btnUniverso.classList.remove('active');
  btnExploracao.classList.add('active');
  btnHome.classList.remove('active');
  document.body.style.backgroundImage = "url('../images/uni3.png')"
}
