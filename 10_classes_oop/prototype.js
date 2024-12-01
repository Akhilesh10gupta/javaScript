

// let myName = "Akhilesh
// let mychannel = "chai

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
        
    }
}

Object.prototype.akhilesh = function (){
    console.log(`akhilesh is present in all object`);
    
}

Array.prototype.heyakhilesh = function (){
    console.log(`akhilesh say hellow`);
    
}

// heroPower.akhilesh()
myHeros.akhilesh()
myHeros.heyakhilesh()
// heroPower.heyakhilesh()

// inheritance

const User = {
    name:"chai",
    email:"chai@google.com"
}

const teacher  = {
    makeVideo : true
}
const teachingSupport  = {
    isAvailable : false
}
const TASupport  = {
    makeAssignment : true,
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "chai aur code       "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`true length is : ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"akhilesh".trueLength()
"iceTea".trueLength()