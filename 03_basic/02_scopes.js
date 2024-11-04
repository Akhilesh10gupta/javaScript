//{} callled scope

let a = 300
if(true){
    let a = 10
    const b = 20
   // var c = 30
  // console.log("INNER", a);  
}

// console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "Akhilesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    
    two()
}

//one()

if(true){
    const username = "hitesh"
    if (username === "hitesh"){
        const webstie = " youtube"
        //console.log(username + webstie);
        
    }
    //console.log(website);
    
}
//console.log(username);



//++++++++++++Intersting+++++++++++


function addone(num){ //type one of making function and also can access before initilization
    return num + 1
}

addone(5)


const addTwo = function(num){  //type two of making function can't access before initilization
    return num + 2
}

addTwo(5)