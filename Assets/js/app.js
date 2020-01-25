
let timer = 75
let timeID = document.getElementById('timer')
let question = document.getElementById('questionInfo')
let answerOne = document.getElementById('answerOne')
let answerTwo =  document.getElementById('answerTwo')
let answerThree  = document.getElementById('answerThree')
let answerFour = document.getElementById('answerFour')
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

const calculateChoice = function (buttonID){
  if(buttonID === 'correct'){
    console.log('correct!')
  }
  else{
    timer = timer - 10
    console.log('incorrect!')
  }
}

const firstQuestion = function(){
  question.textContent = 'oogie boogie!'
  answerOne.textContent = 'a'
  answerTwo.textContent = 'b'
  answerThree.textContent = 'c'
  answerFour.textContent = 'd'
  document.getElementById('choices').addEventListener('click', function(event){
    let playerChoice = event.target.value
    calculateChoice(playerChoice)
  })
  

}

const startGame = function () {
  showQuestions()
  firstQuestion()
}

document.getElementById("start").addEventListener('click', startGame)


