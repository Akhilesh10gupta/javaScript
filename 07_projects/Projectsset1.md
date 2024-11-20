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



```html
<h1>Akhilesh</h1>



```