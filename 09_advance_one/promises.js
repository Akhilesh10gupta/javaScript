const promisOne = new Promise(function (resolve,reject){
    //do an async task
    //DB calls, Cryptography
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    }, 1000)
})
promisOne.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolve");
    
})


const promisThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Akhilesh",email: "gakhilesh946@gmail.com"})
    },1000)
})

promisThree.then(function(user){
    console.log(user);
    
})


const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
         if(!error){
            resolve({username:"akhilesh", password: "123"})
         }else{
            reject('someting went wrong')
         }

    }, 1000)
})

promiseFour.then(user => {
    console.log(user);
    return user.username
    
}).then((username)=>{
    console.log(username);
    
}).catch(function(error){
    console.log(error);
    
}).finally(() => console.log("finally problem is resolve"))




const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
         if(!error){
            resolve({username:"Vivek", password: "1321"})
         }else{
            reject('error: five went wrong')
         }

    }, 1000)
})

 

// async function getAllUser(){
//    try {
//         const response =  await fetch('https://jsonplaceholder.typicode.com/user')
//         const data =  await response.json()
//         console.log(data); 
//    } catch (error) {
//     console.log();
    
//    }
    
// }

// getAllUser()


fetch('https://jsonplaceholder.typicode.com/users')
.then ((response) => {
return response.json()
})
.then ((data) =>{
console.log(data);
})
.catch((error) => console.log(error) )