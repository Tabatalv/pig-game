import './style.css'


document.querySelector('#app').innerHTML = `
 <main>
      <section class="player player--0 player--active">
        <h2 class="name" id="name--0">Player 1</h2>
        <p class="score" id="score--0">43</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--0">4</p>
        </div>
      </section>
      <section class="player player--1">
        <h2 class="name" id="name--1">Player 2</h2>
        <p class="score" id="score--1">24</p>
        <div class="current">
          <p class="current-label">Current</p>
          <p class="current-score" id="current--1">5</p>
        </div>
      </section>

      <img src="dice-5.png" alt="Playing dice" class="dice" />
      <button class="btn btn--new">🔄 New game</button>
      <button class="btn btn--roll">🎲 Roll dice</button>
      <button class="btn btn--hold">📥 Hold</button>
    </main>
 

`

//activePlayer
let sectionPlayer0 = document.querySelector(".player--0")
let sectionPlayer1 = document.querySelector(".player--1")

//score = [0,0] -> variable de estado en JS
const score0 = document.querySelector("#score--0")
const score1 = document.querySelector("#score--1")

//current -> variable de estado en JS
let currentScore0 = document.querySelector("#current--0")
let currentScore1 = document.querySelector("#current--1")


const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")

let imgDice = document.querySelector(".dice")
let score, currentScore, activePlayer

let totalScore = 0

const initData = () => {
  //init state variables, declara todas las variables a 0 para empezar un juego nuevo, esconde la imagen, se muestra de nuevo el boton de tirar dado
  //  ya que al ganar se oculta, se remueven los clases de jugador ganador que daban un estilo a la tarjeta de jugador para ambos
  //y si se ha empezado un juego nuevo mientras la partida anterior quedo el jugador 2 activo, 
  // se elimina la clase de jugador activo del jugador 2 y se le agrega al jugador 1

  score = [0, 0]
  currentScore = 0
  activePlayer = 0
  score0.textContent = 0
  score1.textContent = 0
  currentScore0.textContent = 0
  currentScore1.textContent = 0
  
  imgDice.classList.add("hidden")
  btnRoll.style.display = "block"
  sectionPlayer0.classList.remove("player--winner")
  sectionPlayer1.classList.remove("player--winner")
  sectionPlayer0.classList.add("player--active")
  sectionPlayer1.classList.remove("player--active")



}
function switchPlayer(){
  resetCurrentScore()
 
    sectionPlayer1.classList.toggle("player--active")
    sectionPlayer0.classList.toggle("player--active")
    activePlayer = activePlayer === 0 ? 1: 0
}

function resetCurrentScore(){
  currentScore = 0 //current = current + diceNumber

  if(activePlayer === 0) currentScore0.textContent = currentScore
  else currentScore1.textContent = currentScore
}


const throwDice = () => {
  let diceNumber = Math.floor(Math.random() * 6) + 1
  imgDice.src = `dice-${diceNumber}.png`
  imgDice.classList.remove("hidden")

  if(diceNumber !== 1) updateCurrentScore(diceNumber)

  else{
    // activePlayer cambia de 0 a 1 y viceversa
    //css cambiará
    //current se tiene que resetear a 0
    // activePlayer === 0 ? 1: 0
    // currentScore = 0
    switchPlayer()
  }
}

function updateCurrentScore(diceNumber){
  currentScore += diceNumber //current = current + diceNumber

    if(activePlayer === 0) currentScore0.textContent = currentScore
    else currentScore1.textContent = currentScore
}

function updateTotalScore (){

  if(activePlayer === 0){
    currentScore = Number(score0.textContent) + currentScore
    score0.textContent = currentScore 
    
    if(currentScore >= 20){
      sectionPlayer0.classList.add("player--winner")
      btnRoll.style.display = "none"
      
    }
    else{
      switchPlayer()
   
    }
    


  } 
  else{
    
    currentScore = Number(score1.textContent) + currentScore
    score1.textContent = currentScore
    
    if(currentScore >= 20){
      sectionPlayer1.classList.add("player--winner")
      
    }
    else{
      switchPlayer()
    
    }

  } 
}
function hold(){

  //verifica que jugador esta activo y segun eso al hacer hold suma lo que tenga acumulado el currentScore (al tirar el dado) 
  // y el totalScore (el score que lleva el jugador) lo guarda en la variable currentScore y lo actualizara en el html, si es mayor a 20, gana,
  //  y cambia el diseño de la tarjeta del jugador, y oculta el boton de tirar dado, de lo cntrario, cambiará de jugador

  updateTotalScore()
}


initData()

btnNew.addEventListener("click", initData)
btnRoll.addEventListener("click", throwDice)
btnHold.addEventListener("click", hold)

