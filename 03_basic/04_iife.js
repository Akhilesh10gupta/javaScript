// immediately invoked function Expression (IIFE)
//to avoid the occuring during global scope

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();

((name) => {
    //Unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
} )('Akhileshs');