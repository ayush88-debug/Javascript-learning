class User{
    constructor(username){
        this.username=username
    }
    printMe(){
        console.log(`Username: ${this.username}`)
    }
}

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

const studentOne=new Student("Ayush","ayush@gmail.com",28237)
console.log(studentOne)
studentOne.printMe() //inheritence
studentOne.study()

const studentTwo=new User("Piyush")
console.log(studentOne)
studentTwo.printMe()
// studentTwo.study()  //Error: studentTwo.study is not a function

console.log(studentOne instanceof User);
