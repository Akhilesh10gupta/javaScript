const marvel_hero = ["thor", "ironman","spiderman"]
const dc_hero = ["superman", "flash", "batman"]

// marvel_hero.push(dc_hero)

// console.log(marvel_hero);
// console.log(marvel_hero[3][2]);

// const allHeros = marvel_hero.concat(dc_hero)
// console.log(allHeros);

const all_new_hero = [...marvel_hero, ...dc_hero] //this method are used like you take a glass and drop it and it will be sperade ....this is called spread opertion
// console.log(all_new_hero);

const another_array = [1, 2, 3,[4, 5, 6],7, [6, 7,[4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



console.log(Array.isArray("Akhilesh"))
console.log(Array.from("Akhilesh"))
console.log(Array.from({name:"akhilesh"}))

let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1, score2, score3));





