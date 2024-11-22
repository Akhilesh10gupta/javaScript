# Project related to DOM
## Project Link 
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

#  solution Code

## Project 1 Backgrounf color changer

```javascript 
console.log("Akhilesh")

const buttons = document.querySelectorAll('.button');
const body = document. querySelector('body');

buttons. forEach(function (button) {
    console. log(button);
    button. addEventListener('click', function(e){
        console. log(e)
        console. log(e.target)
            if(e.target.id === 'grey'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'white'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'blue'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'yellow'){
                body.style.backgroundColor = e.target.id;
            }
            if(e.target.id === 'purple'){
                body.style.backgroundColor = e.target.id;
            }
        })
    });


```
## Project 2 BMI

```javascript
const form = document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt (document.querySelector('#height').value);
    const weight = parseInt (document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height <0 || isNaN(height)) {
      results.innerHTML = `please give a Valid height ${height} `;
    } else if(weight === '' || weight <0 || isNaN(weight)) {
      results.innerHTML = `please give a Valid height ${weight}`;
    } else{
        const bmi = (weight/((height*height/10000)).toFixed(2))
        //show the result
        results.innerHTML = `<span>${bmi}</span>`

        if (bmi < 18.6) {
            console.log("You are underweight");
            results.innerHTML += `<br>You are underweight.`;
        } else if(bmi > 18.6 && bmi < 24.9){
             console.log("you are in Normal Range");
             results.innerHTML +=`<br>you are in normal range`;  
        }else{
            console.log("You are overweight");
            results.innerHTML +=`<br> you are overweight`
            
        }
    }
});

```

## Project 3 Digital Clock
```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString()); // Uncomment this if you want to log the time to the console
    clock.innerHTML = date.toLocaleTimeString(); // Corrected method
}, 1000);



```

## Project 4 Guess the Number 
```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number.');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0.');
    } else if (guess > 100) {
        alert('Please enter a number less than or equal to 100.');
    } else {
        prevGuess.push(guess);
        if (numGuess === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. The random number was ${randomNumber}.`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`The number is  low.`);
    } else {
        displayMessage(`The number is high.`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    remaining.innerHTML = `${10 - numGuess}`;
    numGuess++;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.innerHTML = `<button id="newgame">Start New Game</button>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newgame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${10 - numGuess}`;
        lowOrHi.innerHTML = '';
        userInput.removeAttribute('disabled');
        StartOver.removeChild(p);
        playGame = true;
    });
}

```


## Project 5 Keyboard

```javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) =>{
    insert.innerHTML =`
        <div class = 'color'>
            <table>
                <tr>
                    <th>Key</th>
                    <th>KeyCode</th>
                    <th>Code</th>
                </tr>
                <tr>
                    <td>${e.key === " " ? 'space':e.key}</td>
                    <td>${e.keyCode}</td>
                    <td>${e.code}</td>
                </tr>
                
            </table>
        </div>
    `
})

```

## Project 6 Unlimited Color

```javascript

//generate a random color 

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0 ; i<6; i++){
        color += hex[Math.floor(Math.random() *16 )];
    }
    return color
}
let IntervalId;
const startChangingColor = function (){
   if(!IntervalId){
    IntervalId =  setInterval(changeBgColor,1000);
   }

    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function (){
    clearInterval(IntervalId);
    IntervalId = null; 
};

console.log(randomColor());

document.querySelector("#start").addEventListener('click',startChangingColor);
document.querySelector("#stop").addEventListener('click',stopChangingColor);


```





```html
<h1>Akhilesh</h1>



```