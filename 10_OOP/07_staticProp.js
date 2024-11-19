class User{
    constructor(username){
        this.username=username
    }
    printMe(){
        console.log(`Username: ${this.username}`)
    }
    static createID(){                           //Static Function
        return Math.round(Math.random()*1000)   
    }
}
const UserOne=new User("Ayush")
// console.log(UserOne.createID())  //Error : UserOne.createID is not a function


class Student extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    study(){
        console.log(`Course is studied by ${this.username}`)
    }
}

const studentOne=new Student("Ayush","ayush@yahoo.com",239221)
studentOne.printMe()
// console.log(studentOne.createID());  //Error : UserOne.createID is not a function
