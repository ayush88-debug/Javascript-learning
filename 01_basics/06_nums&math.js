const score=400
console.log(score);
2
const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2))

const otherNumber=123.8993
console.log(otherNumber.toPrecision(4));

const hundreds=10000000000
console.log(hundreds.toLocaleString());

// *******************************Math*************************************//
console.log(Math);

// console.log(Math.abs(-7));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,2,3,8,3,1,5,4));
// console.log(Math.max(4,2,3,8,3,1,5,4));

console.log(Math.random());
console.log(Math.random()*10 + 1);
console.log(Math.floor(Math.random()*10 + 1));

const min=5
const max=30

console.log(Math.floor(Math.random() * (max-min+1) + min));
