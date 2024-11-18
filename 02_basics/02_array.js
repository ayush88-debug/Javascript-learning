// array concatination
const marvel_heros=["ironman","spiderman","captain"]
const DC_heroes = ["superman","batman","flash"]

// marvel_heros.push(DC_heroes)

const allHeros= marvel_heros.concat(DC_heroes) //this will return only new array
console.log(allHeros);

const allnewHeros=[...DC_heroes,...marvel_heros]    //best method for array concatination
console.log(allnewHeros);


// ***************** flat method********************
const anotherarray=[1,3,4,2,[7,8],43,[5,3,[4,1]],1,2]
const AnotherNewArray=anotherarray.flat(Infinity)
console.log(AnotherNewArray);

// for data srapping
console.log(Array.isArray("Ayush"));
console.log(Array.from("Ayush"));
console.log(Array.from(Object.keys({Name:"Ayush"})));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))