let randomNumber = parseInt((Math.random()*100 +1));
console.log(randomNumber);

let submitButton = document.querySelector('#subt');
let userInput = document.querySelector('#guessField');
let guessSlot = document.querySelector('.guesses');
let remaining = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let startOver = document.querySelector('.lastParas');

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submitButton.addEventListener('click',function(e){
        e.preventDefault();
        let guess = parseInt(userInput.value);
        validateGuess(guess)
    })
}


function validateGuess(guess){
//check is user entering valid value
if (isNaN(guess) || (guess>100 && guess<0)) {
    alert("Please Enter A valid number")
}else{
    prevGuess.push(guess)
    if(numGuess == 1){
        displayGuess(guess);
        displayMessage('Game Over');
        endGame();
    }else{
        displayGuess(guess);
        checkGuess(guess);
    }
}
}

function checkGuess(guess){
//compare the values
if (guess == randomNumber) {
    displayMessage(`U Guessed it right`)
    endGame();
}else if(guess<randomNumber){
    displayMessage(`number is too low`)
}else if(guess>randomNumber){
    displayMessage(`number is too High`)
}
}

let displayGuess = (guess)=>{
//Guess Display
userInput.value = '';
guessSlot.innerHTML += `${guess}, `
numGuess++;
remaining.innerHTML = `${11-numGuess}`;
}

let displayMessage = (message)=>{
//Display on the basis of guess
lowOrHi.innerHTML`<h2>${message}</h2>`;

}

let endGame = ()=>{
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id = 'newGame'>
                    Start The new Game</h2>`;
    startOver.appendChild(p)
    playGame = false;
    newGame();
}

let newGame = ()=>{
    const newButton = document.querySelector('#newGame');
    newButton.addEventListener('click',function(e){
    randomNumber = parseInt((Math.random()*100 +1));
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11-numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
        
        
        
        playGame = true;
    })
}