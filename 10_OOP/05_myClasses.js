class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        console.log(`Encrypted Password: ${this.password}abc`)
    }
    changeUsername(){
        console.log(`Username: ${this.username.toUpperCase()}`)
    }
}

const UserOne=new User("Ayush","ayush@gmail.com",12345)
console.log(UserOne);
UserOne.encryptPassword()
UserOne.changeUsername()


// Behind the Shcene
function User_(username,email,password){
    this.username=username
    this.email=email
    this.password=password 
}

User_.prototype.encryptPassword=function(){
    console.log(`Encrypted Password: ${this.password}def`);
    
}

User_.prototype.changeUsername=function(){
    console.log(`Username: ${this.username.toUpperCase()}`)
}

const UserTwo=new User_("Piyush","piyush@gmail.com",9892410)
console.log(UserTwo)
UserTwo.encryptPassword()
UserTwo.changeUsername()