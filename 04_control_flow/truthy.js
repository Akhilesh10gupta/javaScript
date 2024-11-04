//assume that string has truth value is truty value
const userEmail = "Akhilesh@ai"

if (userEmail) {
    console.log("Got user email");
}
else{
    console.log("dont have user email");
    
}

// falsy value 
// false, 0, -0, BigInt 0n, "", null, undefined, Nan 

// truthy value
//true, "0", 'false', " ", [], {}, function(){},

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
    
}

// Nullish Coalesing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);


// Terniary Operator

//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("More than 80");

