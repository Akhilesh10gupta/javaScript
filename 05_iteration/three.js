// for of 

const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
    
}

const greetings = "hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
    
}

//maps  used for unique value and order 

const map = new Map()
map.set('In',"India")
map.set('USA',"United state of america")
map.set('Fr',"France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
    
}



const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman',

}

// for (const [key, value] of myObjectobject) {
//     console.log(key, ':-', value);
    
// }

