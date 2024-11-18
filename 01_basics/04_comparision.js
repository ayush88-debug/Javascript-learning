// console.log(2<1)
// console.log("3">="2");

// console.log("2">1);
// console.log("002">1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);
// The reason is that euality check(==) and comparision (><>=<=) works differently 
// comparision converts  null to a number ,treating as 0

console.log(undefined>0);
console.log(undefined==0);
console.log(undefined>=0);

// === (strict check)
console.log("2"===2);

let num=9;
console.log(num++)