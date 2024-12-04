const Discriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(Discriptor);



// Math.PI = 5
// console.log(Math.PI);

// const chai = Object.create(null)
const chai = {
    name: "Ginger tea",
    price: 230,
    isAvailable: true,

    orderChai: function () {
        console.log("Chai NAhi bani.");

    }
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} , ${value}`);
    }
}