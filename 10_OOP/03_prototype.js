const myName="  Ayush     "
// console.log(myName.length)
// console.log(myName.trueLength)

const myHeroes=["Thor","Ironman","Captain"]

const myPower={
    thor:"Hammer",
    ironman: "suit",
    captain: "Shield",

    getPowerCaptain:function(){
        console.log(`Captain Power is ${this.captain}`);
    }
}

Object.prototype.ayush=function(){
    console.log('method ayush is present in all objects');
    console.log(this.thor)
}

Array.prototype.sayAyush=function(){
    console.log(`method sayAyush is present in only Array`)  //Array, String all are objects 
}

myPower.ayush()
myHeroes.ayush()
// myPower.sayAyush()  //Error
myHeroes.sayAyush()

// inheritance
const User={
    username:"Ayush",
    password: 12345
}
const personalInfo={
    email:"Ayush@gmail.com",
    mobile:912367
}
const accountInfo={
    isLoggedIn:true,
    logInCount:5,
    __proto__:User  //now you can access the properties of Object "User"
}

console.log(accountInfo.username);

// personalInfo.__proto__=User
// console.log(personalInfo.password)

// Modern Syntax for inheritance
Object.setPrototypeOf(User,personalInfo)

console.log(User.mobile);

 
let anotherUsername=" Ayush     "

String.prototype.trueLength=function(){
    console.log(this)
    return this.trim().length
}

console.log(anotherUsername.trueLength())

