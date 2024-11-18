// singalton 
Object.create   //made singalton

// /object literals -  made //non-singalton

// symbol
const mySym =Symbol("key1")


const JSuser={
    name:"Ayush",
    "Full Name": "Ayush Ghavghave",
    [mySym]:"mykey1",
    age:19,
    location:"Nagpur",
    email: "ayush@google.com",
    isloggedIn:false,
    lastLoginDays:["monday","FRiday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["Full Name"]);
console.log(JSuser[mySym]);

// ********************changes in object************************
JSuser.email="ayush@chatgpt.com"
// Object.freeze(JSuser)         //freezed the obeject (we cant change the obj)
JSuser.email="ayush@microsoft.com"
// console.log(JSuser);


// ****************************adding function in obj********************
JSuser.greeting=function(){
    console.log("Hello Js User");
}
JSuser.greetingTwo=function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());

// ********************************adding key:value in object
JSuser.ishuman=false
console.log(JSuser["ishuman"]);


