// Premitive
// 7-types: strings ,number ,boolean ,null,undefined, symbol

const score=110
const scoreValue=100.66
const isLOggedIn=false
const outsideTemp=null

// Symbol in Js
// const id=Symbol('123')
// const anotherId=symbol('123')
// console.log(id===anotherId); //output:false

const bigNUmber=287372897289782820992n
console.log(bigNUmber);

// Reference(Non primitive)
// array, Object ,Function

// array
const heroes=["ironman","hulk","captain"]
console.log(typeof heroes);

// Object
let myobj={
    name:"ayush",
    age:19,
}
console.log(typeof myobj);

// function
const myFunction=function(){
    console.log("Hello world");
}
console.log(typeof myFunction);


// ****************************************************************************************
// Memories in js
// stack(used in Premitive data types) and heap (used in non-Premitive data types)


// stack Example:(Make copies)
let myYtName="Ayush Ghavghave"
let anotherName=myYtName
anotherName="BroCode"
console.log(myYtName);
console.log(anotherName);

// Heap Example:(give referance)
let UserOne={
    email:"ayush@gmail.com",
    upi:"ayush@ybl"
}
let UserTwo=UserOne
UserTwo.email="ghavghave@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);

