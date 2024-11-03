// singleton
// object.create


// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Akhilesh",
    "full name": "AKhilesh Gupta",
    [mySym]: "key1",
    age: 18,
    email: "gakhilesh946@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "Sunday"],

}

//to way to access object
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "gupta@gmail.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JS user");
    
}

JsUser.greeting2 = function(){
    console.log(`hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());


