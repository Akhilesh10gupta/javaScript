// dates 

let myDate =new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); //interview question


// let myCreatedDate = new Date(2024, 10, 3)
let myCreatedDate = new Date("2024-11-03")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());

newDate.toLocaleString('defult',{
    weekday:"long"
})


