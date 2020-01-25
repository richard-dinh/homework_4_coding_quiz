
let timer = 75
let timeID = document.getElementById('timer')
const reduceTimer = function (){
  timer--
  timeID.textContent= timer
}

setInterval(reduceTimer, 1000)
