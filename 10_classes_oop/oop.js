const user = {
    username: "Akhilesh",
    loginCount: 8,
    signeIn: true,
    
    getUserDetails: function(){
        //console.log("got user details from data-base");
        //console.log(`Username: ${this.username} `);
        console.log(this);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());


// const promiseOne = new Promise()
// const data = new Date()

function User (username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`weloome ${this.username}`);
        
    }

    return this
}


// use of new key word 
// step 1:  create new object
// step 2:  Construter function call due to new key word
// step 3:  All aurgment are injected in this key word
// step 4:  All are meet in function
// 

const userOne = new User("akhilesh",12, true)
const userTwo = new User("Gupta",21, true)
console.log(userOne);
console.log(userTwo);
