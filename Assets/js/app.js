
let timer = 10
let timeID = document.getElementById('timer')
let question = document.getElementById('questionInfo')
let answerOne = document.getElementById('answerOne')
let answerTwo =  document.getElementById('answerTwo')
let answerThree  = document.getElementById('answerThree')
let answerFour = document.getElementById('answerFour')
let playerChoice=''
const reduceTimer = function (){
  timer--
  timeID.textContent= timer
}

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
    console.log(timer)
    console.log('incorrect!')
  }
}
const endScreen = function(){
  question.textContent = 'THE END'
}

const firstQuestion = function(){
  question.textContent = 'Question 1!'
  answerOne.textContent = 'correct'
  answerOne.value = 'correct'
  answerTwo.textContent = 'wrong'
  answerTwo.value = 'incorrect'
  answerThree.textContent = 'wrong'
  answerThree.value = 'incorrect'
  answerFour.textContent = 'wrong'
  answerFour.value = 'incorrect'
  document.getElementById('choices').addEventListener('click', function (event) {
    playerChoice = event.target.value
    calculateChoice(playerChoice)
    console.log('i am in question 1')
    secondQuestion()
    console.log('i am in question 1 part 2')
    })
}

const secondQuestion = function () {
  question.textContent = 'Question 2!'
  answerOne.textContent = 'wrong'
  answerOne.value = 'incorrect'
  answerTwo.textContent = 'Correct'
  answerTwo.value = 'correct'
  answerThree.textContent = 'Wrong'
  answerThree.value = 'incorrect'
  answerFour.textContent = 'Wrong'
  answerFour.value = 'incorrect'
  document.getElementById('choices').addEventListener('click', function (event) {
    playerChoice = event.target.value
    calculateChoice(playerChoice)
    playerChoice = ''
    endScreen()
  })
}

const startGame = function () {
  showQuestions()
  setInterval(reduceTimer, 1000)
  setInterval(function(){
    if(timer<=0){
      endScreen()
    }
  },100)
  firstQuestion()
}

document.getElementById("start").addEventListener('click', startGame)


