
let timer = 75
let timeID = document.getElementById('timer')
let question = document.getElementById('questionInfo')
let choiceOne = document.getElementById('one')
let choiceTwo =  document.getElementById('two')
let choiceThree  = document.getElementById('three')
let choiceFour = document.getElementById('four')
let playerChoice=''
let interval

let questionList = [
  {
    text: 'Question 1',
    options: ['a', 'b', 'c', 'd'],
    isCorrect: 'a'
  },
  {
    text: 'Question 2',
    options: ['a', 'b', 'c', 'd'],
    isCorrect: 'b'
  },
  {
    text: 'Question 3',
    options: ['a', 'b', 'c', 'd'],
    isCorrect: 'c'
  },
  {
    text: 'Question 4',
    options: ['a', 'b', 'c', 'd'],
    isCorrect: 'd'
  },
  {
    text: 'Question 5',
    options: ['a', 'b', 'c','d'],
    isCorrect: 'a'
  }
]

const generateQuestion = function(index){
  //displaying the question text
  document.getElementById('questionInfo').textContent=index.text
  //generating buttons
  for(let i=0; i<4; i++){
    var newBtn = document.createElement('button')
    newBtn.setAttribute('class', 'choiceBtn')
    newBtn.setAttribute('id', `${i}`)
    //setting the text on the button
    newBtn.textContent = index.options[i]
    document.getElementById('choices').append(newBtn)
  }

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
    document.getElementById('result').textContent= `Correct!`
    setTimeout(function() {
      document.getElementById('result').textContent =''      
    }, 1000);
  }
  else{
    timer = timer - 10
    console.log(timer)
    document.getElementById('result').textContent = `Incorrect!`
    setTimeout(function () {
      document.getElementById('result').textContent = ''
    }, 1000);
    console.log('incorrect!')
  }
}
const endScreen = function(){
  question.textContent = 'THE END'
  clearInterval(interval)
  document.getElementById('choices').style.display = 'none'
  document.getElementById('timer').style.display = 'none'
  let displayInfo = document.getElementById('quizInfo')
  displayInfo.style.display = 'block'
  displayInfo.textContent =  `Your Score is ${timer}`
}

const firstQuestion = function(){
  generateQuestion(questionList(0))
  document.getElementById('choices').addEventListener('click', function myClick(event) {
    playerChoice = event.target.value
    calculateChoice(playerChoice)
    console.log('i am in first question')
    console.log(event)
    document.getElementById('choices').removeEventListener('click', myClick)
    secondQuestion()
  })
}

const secondQuestion = function () {
  question.textContent = 'Question 2!'
  choiceOne.textContent = 'wrong'
  choiceOne.value = 'incorrect'
  choiceTwo.textContent = 'Correct'
  choiceTwo.value = 'correct'
  choiceThree.textContent = 'Wrong'
  choiceThree.value = 'incorrect'
  choiceFour.textContent = 'Wrong'
  choiceFour.value = 'incorrect'
  document.getElementById('choices').addEventListener('click', function myClick(event) {
    playerChoice = event.target.value
    calculateChoice(playerChoice)
    console.log('i am in second question')
    console.log(event)
    document.getElementById('choices').removeEventListener('click', myClick)
    thirdQuestion()
  })
}
const thirdQuestion = function () {
  question.textContent = 'Question 3!'
  choiceOne.textContent = 'wrong'
  choiceOne.value = 'incorrect'
  choiceTwo.textContent = 'Correct'
  choiceTwo.value = 'correct'
  choiceThree.textContent = 'Wrong'
  choiceThree.value = 'incorrect'
  choiceFour.textContent = 'Wrong'
  choiceFour.value = 'incorrect'
    document.getElementById('choices').addEventListener('click', function myClick(event) {
      playerChoice = event.target.value
      calculateChoice(playerChoice)
      console.log('i am in third question')
      console.log(event)
      document.getElementById('choices').removeEventListener('click', myClick)
      fourthQuestion()
    })
}
const fourthQuestion = function () {
  question.textContent = 'Question 4!'
  choiceOne.textContent = 'wrong'
  choiceOne.value = 'incorrect'
  choiceTwo.textContent = 'wrong'
  choiceTwo.value = 'incorrect'
  choiceThree.textContent = 'Wrong'
  choiceThree.value = 'incorrect'
  choiceFour.textContent = 'correct'
  choiceFour.value = 'correct'
    document.getElementById('choices').addEventListener('click', function myClick(event) {
      playerChoice = event.target.value
      calculateChoice(playerChoice)
      console.log('i am in fourth question')
      console.log(event)
      document.getElementById('choices').removeEventListener('click', myClick)
      fifthQuestion()
    })
}
const fifthQuestion = function () {
  question.textContent = 'Question 5!'
  choiceOne.textContent = 'wrong'
  choiceOne.value = 'incorrect'
  choiceTwo.textContent = 'wrong'
  choiceTwo.value = 'incorrect'
  choiceThree.textContent = 'Correct'
  choiceThree.value = 'correct'
  choiceFour.textContent = 'Wrong'
  choiceFour.value = 'incorrect'
    document.getElementById('choices').addEventListener('click', function myClick(event) {
      playerChoice = event.target.value
      calculateChoice(playerChoice)
      console.log('i am in third question')
      console.log(event)
      document.getElementById('choices').removeEventListener('click', myClick)
      endScreen()
    })
}

const reduceTimer = function () {
  timer--
  timeID.textContent = timer
}
const startGame = function () {
  showQuestions()
  // interval = setInterval(reduceTimer, 1000)
  // setInterval(function(){
  //   if(timer<=0){
  //     endScreen()
  //   }
  // },100)
  // firstQuestion()
  console.log('hello')
}

document.getElementById("start").addEventListener('click', startGame)


