const user = {
    username: "Akhilesh",
    price: 999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website`);
        // console.log(this);    
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Akhilesh"
//     console.log(this);
    
// }
// chai()

const chai = () => {
    let username = "Akhilesh"
     console.log(this.username);
}
//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2           //explicit return
// }

// const addTwo = (num1, num2) => num1 + num2  //implicit return arrow function
const addTwo = (num1, num2) => (num1 + num2 )
   

console.log(addTwo(3,4));

//const myArray = [2, 4, 5, 6, 7, 8]




