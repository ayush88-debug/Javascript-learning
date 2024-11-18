// Array

const myarr= [1,2,4,3,"ayush",7,8,true]
// console.log(myarr[4]);

const myheroes=new Array(1, 2, 2, 3,)
// console.log(myheroes[2]);

// Array methods

const newArr=[1,2,3,4,3,5,6]
// newArr.push(7)
// newArr.push(8)
// newArr.pop()
// newArr.unshift(9) //push at 0 index
// newArr.shift() //pop at 0 index

// console.log(newArr.includes(4));
// console.log(newArr.indexOf(3));

const newcopy=newArr.join()

// console.log(newArr);
// console.log(newcopy);

// slice and splice
console.log("A ",newArr);

const myn1=newArr.slice(1,3) //slice
console.log(myn1);

console.log("B ",newArr);

const myn2=newArr.splice(1,3) //splice :manupulate original Array
console.log(myn2);

console.log("C ",newArr);




