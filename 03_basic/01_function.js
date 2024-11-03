
function sayMyName(){
    console.log("A");
    console.log("h");
    console.log("i");
    console.log("l");
    console.log("e");
    console.log("s");
    console.log("h");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumber(3, 8);  
// console.log("result:", result);


function loginUserMessage(username){
    // if (!undefine){
    //     console.log("Please enter a user name");
    //     return
    // }
    // return `${username} just loged in `
    
    if (username === undefined){
        console.log("Please enter a user name");
        return
    }
    return `${username} just loged in `
}

// console.log(loginUserMessage("Akhilesh"));
console.log(loginUserMessage());

