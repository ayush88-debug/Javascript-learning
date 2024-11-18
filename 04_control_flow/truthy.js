const username= "ayush1234"
if (username){
    console.log("User name exist")
}
else{
    console.log("user name not exist")
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (username.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj={
    name:"ayush",
    rollno:47
}
if(Object.keys(emptyObj).length==0){
    console.log("Object is empty")
}
else{
    console.log("Object is not empmty")
}


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1=5 ?? 10
// val1=undefined ?? 10
// val1=NaN ?? 10
// val1=null ?? 10
val1=null ?? 20 ?? 10

console.log(val1)

// Terniary Operator

// condition ? true : false
const coffee="cold"
coffee != "cold" ? console.log("Hot coffee") : console.log("Cold Coffee")