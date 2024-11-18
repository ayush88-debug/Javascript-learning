// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [6, 7, 3, 4, 5, 2];

for (const iterator of arr) {
  // console.log(iterator);
}

const word = "Hello World";
for (const letter of word) {
  // console.log(letter);
}


// ************************** Map *******************
const map = new Map();
map.set("IN", "India");
map.set("AUS", "Austrelia");
map.set("USA", "America");
// console.log(map.get("USA"));
for (const [key, value] of map) {
  // console.log(`${key} --->  ${value}`);
}

const myObj = {
    name: "Ayush",
    surname:"Ghavghave",
    email:"ayush@gmail.com"
};

// for (const key of myObj) {
//     console.log(key)           //myObject is not iterable
    
// }
