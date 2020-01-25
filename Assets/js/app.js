
let timer = 75
let timeID = document.getElementById('timer')
const reduceTimer = function (){
  timer--
  timeID.textContent= timer
}

setInterval(reduceTimer, 1000)

const showQuestions = function (){
  // line to reveal player choices
  document.getElementById('choices').style.display = 'block'
  // hide start button
  document.getElementById('start').style.display = 'none'
  // hide quiz info
  document.getElementById('quizInfo').style.display = 'none'
}

const startGame = function () {
  showQuestions()

}

document.getElementById("start").addEventListener('click', startGame)


