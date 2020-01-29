
let timer = 75
let timeID = document.getElementById('timer')
let question = document.getElementById('questionInfo')
let choiceOne = document.getElementById('one')
let choiceTwo =  document.getElementById('two')
let choiceThree  = document.getElementById('three')
let choiceFour = document.getElementById('four')
let playerChoice=''
let playerScores =[]
let playerName
let interval

let questionList = [
  {
    text: 'Question 1',
    options: ['right', 'b', 'c', 'd'],
    isCorrect: 'right'
  },
  {
    text: 'Question 2',
    options: ['a', 'right', 'c', 'd'],
    isCorrect: 'right'
  },
  {
    text: 'Question 3',
    options: ['a', 'b', 'right', 'd'],
    isCorrect: 'right'
  },
  {
    text: 'Question 4',
    options: ['a', 'b', 'c', 'right'],
    isCorrect: 'right'
  },
  {
    text: 'Question 5',
    options: ['right', 'b', 'c','d'],
    isCorrect: 'right'
  }
]


const showQuestions = function (){
  // line to reveal player choices
  document.getElementById('choices').style.display = 'block'
  // hide start button
  document.getElementById('start').style.display = 'none'
  // hide quiz info
  document.getElementById('quizInfo').style.display = 'none'
}

const calculateChoice = function (value, index){
  console.log(questionList[index].isCorrect)
  console.log(`value: ${value}`)
  if(value === questionList[index].isCorrect){
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

const generateQuestion = function (index) {
  //displaying the question text
  //empty out buttons first so no duplicates
  document.getElementById('choices').innerHTML = ''
  document.getElementById('questionInfo').textContent = index.text
  //generating buttons
  for (let i = 0; i < 4; i++) {
    var newBtn = document.createElement('button')
    newBtn.setAttribute('class', 'choiceBtn')
    newBtn.setAttribute('id', `${i}`)
    //setting the text on the button
    newBtn.setAttribute('value', `${index.options[i]}`)
    newBtn.textContent = index.options[i]
    document.getElementById('choices').append(newBtn)
  }
}
const firstQuestion = function(){
  generateQuestion(questionList[0])
  document.getElementById('choices').addEventListener('click', function myClick(event) {
    playerChoice = event.target.value
    calculateChoice(playerChoice, 0)
    console.log('i am in first question')
    console.log(event)
    document.getElementById('choices').removeEventListener('click', myClick)
    secondQuestion()
  })
}

const secondQuestion = function () {
  generateQuestion(questionList[1])
  document.getElementById('choices').addEventListener('click', function myClick(event) {
    playerChoice = event.target.value
    calculateChoice(playerChoice,1)
    console.log('i am in second question')
    console.log(event)
    document.getElementById('choices').removeEventListener('click', myClick)
    thirdQuestion()
  })
}
const thirdQuestion = function () {
  generateQuestion(questionList[2])
    document.getElementById('choices').addEventListener('click', function myClick(event) {
      playerChoice = event.target.value
      calculateChoice(playerChoice,2)
      console.log('i am in third question')
      console.log(event)
      document.getElementById('choices').removeEventListener('click', myClick)
      fourthQuestion()
    })
}
const fourthQuestion = function () {
  generateQuestion(questionList[3])
    document.getElementById('choices').addEventListener('click', function myClick(event) {
      playerChoice = event.target.value
      calculateChoice(playerChoice,3)
      console.log('i am in fourth question')
      console.log(event)
      document.getElementById('choices').removeEventListener('click', myClick)
      fifthQuestion()
    })
}
const fifthQuestion = function () {
  generateQuestion(questionList[4])
    document.getElementById('choices').addEventListener('click', function myClick(event) {
      playerChoice = event.target.value
      calculateChoice(playerChoice,4)
      console.log('i am in third question')
      console.log(event)
      document.getElementById('choices').removeEventListener('click', myClick)
      endScreen()
    })
}

const endScreen = function () {
  question.textContent = 'THE END'
  clearInterval(interval)
  document.getElementById('choices').style.display = 'none'
  document.getElementById('timer').style.display = 'none'
  document.getElementById('highScorePage').style.display = 'block'
  let displayInfo = document.getElementById('quizInfo')
  displayInfo.style.display = 'block'
  if(timer<0){
    timer = 0
  }
  displayInfo.innerHTML = `<p>Your Score is ${timer}</p>`
  document.getElementById('addName').addEventListener('click',event =>{
    event.preventDefault()
    playerName = document.getElementById('name').value
    playerScores.push(
      {
        name: playerName,
        score: timer
      }
    )
  })
  console.log(playerScores)
  displayHighScores()
}

const displayHighScores = function(){
  
}

const reduceTimer = function () {
  timer--
  timeID.textContent = timer
}
const startGame = function () {
  showQuestions()
  interval = setInterval(reduceTimer, 1000)
  setInterval(function(){
    if(timer<=0){
      endScreen()
    }
  },100)
  firstQuestion()
  console.log('hello')
}

document.getElementById("start").addEventListener('click', startGame)


