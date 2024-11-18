const User={
    username: 'Ayush',
    loginCount: 8,
    signedIn: true,

    grtUserDetails: function(){
        // console.log(`UserName: ${this.username}`);
        console.log(this);
        
    }
}

// console.log(User.grtUserDetails());
// console.log(User);

function userDetail(username,password, isLoggedIn){
    this.username=username
    this.password=password
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this  //if we create new instance then we do not have to return this 
}

const userOne=new userDetail("aysuh",12345,true)
console.log(userOne);
const userTwo=new userDetail("Piyush",27322,false);  //creating new instance
console.log(userTwo)
console.log(userTwo.isLoggedIn)
userTwo.greeting()


