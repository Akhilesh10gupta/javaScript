const name = "akhilesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log( `Hellow my name is ${name} and my repo count is ${repoCount}`  ); // string intropulation 

const gameName = new String ('Assassin Creed');

console.log(gameName[0]);
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toUpperCase());//convert the string in upper case
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

//const newString = gameName.substring(0,4) //for cut 
//console.log(newString);

const anotherString =  gameName.slice(-8, 4) /// for reverse 
console.log(anotherString);


const newStringOne = "    Akhilesh     "
console.log(newStringOne);
console.log(newStringOne.trim())

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace( '%20', '-')) //to find and replace

console.log(url.includes('hitesh'))