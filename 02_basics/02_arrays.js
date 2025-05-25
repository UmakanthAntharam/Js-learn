const marvelHeroes = ["Thor", "Hulk", "Ironman"]
const dcHeroes =  ["superman","Flash","Batman"]

// marvelHeroes.push(dcHeroes);  //push operator

// console.log(marvelHeroes);
// console.log(marvelHeroes[3][1]);

// const allHeroes = marvelHeroes.concat(dcHeroes);  //concat operator
// console.log(allHeroes)

const allHeroes = [...marvelHeroes,...dcHeroes]  // spread operator

// console.log(allHeroes);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_anotherArray = anotherArray.flat(Infinity);
// console.log(real_anotherArray);


console.log(Array.isArray("Umakanth"));
console.log(Array.from("Umakanth"));
console.log(Array.from({name:"Umakanth"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2 , score3));