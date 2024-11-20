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