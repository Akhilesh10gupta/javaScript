// array

const myArr = [0, 1, 2, 5, 6, 7,]
const myHero =["Spiderman", "superman", "Batman", "ironman"]

const myArr2 = new Array(1, 2, 3, 4, 5,)
// console.log(myArr2[3]);

//array methods

// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(10 ) //insert the element in first postion 

// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( typeof newArr);


//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice (1,3)
console.log("C", myArr);
console.log(myn2);



