//primitive

// 7 types : string, Number,  Boolean, Null, underfined, symbool, bigint 

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
let userEmail; //it will go undefine

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3443534666



// referense (non primitive)

// array, objects, functions

const heros = ["spiderman", "superman", "batman"]; //array

let myObj = {
    name:"akhilesh",
    age: 22,
} //object

const  myFunction = function(){
    console.log("hellow world");
    
} //function

console.log(typeof myFunction);

//  https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename ="gamerlens"

let anothername = myYoutubename
anothername = "paintyourlife"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email: "user@google.com",
    upr:"@upiybl"
}

let userTwo = userOne


userTwo.email = "akhilesh@gmail.com"

console.log(userOne);
console.log(userTwo);