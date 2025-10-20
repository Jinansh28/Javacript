const form = document.querySelector('form')
const userInput = document.querySelector('#guessField')
let a = Math.floor(Math.random()*100+1)
const guessRemain = document.querySelector('.lastResult')
const guessSlot = document.querySelector('.guesses')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess) || guess<=0 || guess>100){
        alert("Enter a valid value");
    }
    else{
        prevGuess.push(guess)
        if(numGuess >= 10){
            displayGuess(guess)
            displayMessage(`Game Over, Random number was ${a}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === a){
        displayMessage(`You Guessed it right`)
        endGame()
    } else if (guess < a){
        displayMessage(`Number is low`)
    } else {
        displayMessage(`Number is High`)
    }
}

function displayGuess(guess){
    userInput.value = ""
    guessSlot.innerHTML += `${guess} `
    numGuess++
    guessRemain.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame"> Start New Game </h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',(e)=>{
        e.preventDefault()
        a = Math.floor(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        guessRemain.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);
        lowOrHi.innerHTML = ''
        playGame = true
    })
}

