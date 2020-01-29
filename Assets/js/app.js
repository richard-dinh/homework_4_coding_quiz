let timer
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
    text: 'What is the HTML tag under which one can write the JavaScript code',
    options: ['<javascript>', '<scripted>', '<script>', '<js>'],
    isCorrect: '<script>'
  },
  {
    text: 'Which of the following is the correct syntax to display “GeeksforGeeks” in an alert box using JavaScript?',
    options: ['alertbox(“GeeksforGeeks”)', 'msg(“GeeksforGeeks”)', 'msgbox(“GeeksforGeeks”)', 'alert(“GeeksforGeeks”)'],
    isCorrect: 'alert(“GeeksforGeeks”)'
  },
  {
    text: 'What is the correct syntax for referring to an external script called “geek.js”?',
    options: ['<script src=”geek.js”>', '<script href=”geek.js”>', '<script ref=”geek.js”>', '<script name=”geek.js”>'],
    isCorrect: '<script src=”geek.js”>'
  },
  {
    text: 'Which of the following is not a reserved word in JavaScript?',
    options: ['interface', 'throws', 'program', 'short'],
    isCorrect: 'short'
  },
  {
    text: 'The _______ method of an Array object adds and/or removes elements from an array.',
    options: ['Reverse', 'Shift', 'Slice','Splice'],
    isCorrect: 'Splice'
  }
]


const showQuestions = function (){
  // line to reveal player choices
  document.getElementById('choices').style.display = 'block'
  // hide start button
  document.getElementById('start').style.display = 'none'
  // hide quiz info
  document.getElementById('quizInfo').style.display = 'none'
  document.getElementById('timer').style.display = ''
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
    newBtn.textContent =`${i+1}: ${index.options[i]}`
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
  let highScorePage = document.getElementById('highScorePage')
  highScorePage.style.display = 'block'
  let displayInfo = document.getElementById('quizInfo')
  displayInfo.style.display = 'block'
  if(timer<0){
    timer = 0
  }
  displayInfo.innerHTML = `<p>Your Score is ${timer}</p>`
  document.getElementById('addName').addEventListener('click', function myClick(event){
    event.preventDefault()
    playerName = document.getElementById('name').value
    playerScores.push(
      {
        name: playerName,
        score: timer
      }
    )
    document.getElementById('addName').removeEventListener('click', myClick)
    //empty out user input
    document.getElementById('name').value = ''
    displayHighScores()
  })
  console.log(playerScores)
}

const displayHighScores = function (){
    //hide user input prompt
    let displayInfo = document.getElementById('quizInfo')
    let item
    let list = document.createElement('ul')
    list.setAttribute('class', 'listClass')
    highScorePage.style.display = 'none'
    question.textContent = 'High Scores'
    displayInfo.innerHTML =''
    playerScores.forEach((elem,index)=>{
     item= document.createElement('li')
     item.innerHTML = `Player: ${elem.name}<br>
     Score: ${elem.score}`
     list.append(item)
    })
    displayInfo.append(list)
    let retake = document.getElementById('retake')
    retake.style.display = 'block'
    retake.addEventListener('click', function myClick(event){
      event.preventDefault()
      restartQuiz()
      retake.removeEventListener('click', myClick)
    })
}

const restartQuiz=function(){
  question.innerHTML = 'Coding Quiz Challenge'
  document.getElementById('highScorePage').style.display = 'none'
  document.getElementById('quizInfo').innerHTML = 'Come take my coding quiz!'
  document.getElementById('start').style.display = 'block'
  retake.style.display = 'none'
}
const reduceTimer = function () {
  timer--
  timeID.textContent = timer
}
const startGame = function () {
  timer = 75
  console.log(timer)
  showQuestions()
  interval = setInterval(reduceTimer, 1000)
  setInterval(function(){
    if(timer<=0){
      endScreen()
    }
  },100)
  firstQuestion()
}

document.getElementById("start").addEventListener('click', startGame)


