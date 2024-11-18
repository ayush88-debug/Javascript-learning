function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=3; //means function is also object
console.log(multiplyBy5.power)

console.log(multiplyBy5(2))

console.log(multiplyBy5.prototype)

function createUser(username,price){
    this.username=username
    this.price=price
    return this //optional if creates "new" instance
}


createUser.prototype.increment=function(){
    // console.log(this)
    this.price++
}
createUser.prototype.printPrice=function(){
    console.log(`Price: ${this.price}`);
}

const userOne= new createUser("Ayush", 30)
const userTwo= createUser("Piyush", 60)
console.log(userOne)

userOne.increment()
userOne.printPrice()
