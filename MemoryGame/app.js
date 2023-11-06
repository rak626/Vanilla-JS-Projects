// dom elements
const boxes = document.querySelectorAll('.box'),
    messageBox = document.querySelector('#message'),
    resetBtn = document.querySelector('#reset'),
    scoreEle = document.querySelector('#scoreSpan'),
    bestScoreEle = document.querySelector('#bestScoreSpan'),
    startBtn = document.querySelector('#start')

//game states/variables
let colors = [],
    inputColors = [],
    clickCount = 0,
    score = 0,
    best = 0

//action functions

function addColorToMemory() {
    let num = Math.floor(Math.random() * 4)
    colors.push(num)
}

const animateNextDiv = (index) => {
    if (index >= colors.length) {
        return
    }
    const box = boxes[colors[index]]
    box.style.transition = 'all 1s ease-in-out'
    box.style.transform = 'scale(0.85)'
    setTimeout(() => {
        box.style.transition = 'all 1s ease-out'
        box.style.transform = 'scale(1)'
        setTimeout(() => {
            animateNextDiv(index + 1)
        }, 1000)
    }, 1000)
}

function visualize() {
    animateNextDiv(0)
}

function handleClickEvent(event) {
    clickCount++
    const inputColor = event.target.id.toLowerCase()
    console.log(inputColor)
    switch (inputColor) {
        case 'yellow':
            inputColors.push(3)
            break
        case 'blue':
            inputColors.push(1)
            break
        case 'red':
            inputColors.push(0)
            break
        case 'green':
            inputColors.push(2)
            break
        default:
            displayMessage('invalid input ...')
    }
    if (clickCount === colors.length) {
        clickCount = 0
        removeEventListener()
        validateInput()
    }
}

function removeEventListener() {
    boxes.forEach((box) => {
        box.removeEventListener('click', handleClickEvent, false)
    })
}

function takingInput() {
    inputColors = []
    boxes.forEach((box) => {
        box.addEventListener('click', handleClickEvent, false)
    })
}

function displayMessage(msg, label) {
    messageBox.style.color = label ? 'red' : 'rgb(72, 255, 0)'
    messageBox.innerHTML = msg
}

function displayScores() {
    scoreEle.innerHTML = score
    bestScoreEle.innerHTML = best
}

function updateScore() {
    score = score + 1
    best = Math.max(score, best)
}

function resetScore() {
    score = 0
    displayScores()
    colors = []
    inputColors = []
    clickCount = 0
    runSteps()
}

function resetGame() {
    best = 0
    resetScore()
    displayMessage('', true)
}
function validateInput() {
    if (JSON.stringify(colors) === JSON.stringify(inputColors)) {
        updateScore()
        displayScores()
        displayMessage('Correct Guess, Score Updated.', false)
        runSteps()
    } else {
        displayMessage('Sorry you lost. Click Start to play again', true)
        resetScore()
    }
}

function runSteps() {
    addColorToMemory()
    visualize()
    takingInput()
}

// event listeners
window.onload = runSteps

resetBtn.addEventListener('click', function (e) {
    resetGame()
})

startBtn.addEventListener('click', (e) => {
    resetScore()
})
