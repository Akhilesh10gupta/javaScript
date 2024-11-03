// two way to define object
// const tinderUser = new Object () // first way singleton Object
const tinderUser = {} //second way non singletone object

tinderUser.id = "123abc"
tinderUser.name = "Akhilesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"Akhilesh",
            Lastname:"Gupta"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 ={1: "a", 2:"b"}
const obj2 ={3: "a", 4:"b"}
const obj4 ={5: "a", 6:"b"}

//three mehod to concatinate object

// const obj3 = {obj1, obj2} //first
// const obj3 =Object.assign({}, obj1, obj2, obj4) //second

const obj3 ={...obj1,...obj2,...obj4 } //third

//console.log(obj3);

const user = [
    {
        id:1,
        email:"a@gmail.com",
    },
    {
        id:1,
        email:"a@gmail.com",
    },
    {
        id:1,
        email:"a@gmail.com",
    }
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course ={
    coursename: "js in hindi",
    price: "999",
    courseInsteuctor: "akhilesh"
}

const {courseInsteuctor: instructor} = course //how to destructure the object
// console.log(courseInsteuctor);
console.log(instructor);
 