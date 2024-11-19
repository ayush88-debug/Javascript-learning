// console.log(Math.PI)
// Math.PI=5               //Hence we canaot cahnge value of PI
// console.log(Math.PI)   


const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter)

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"))

console.log(chai.name)
chai.name="Masala Chai"
console.log(chai.name)


// Checking if iterable
for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}