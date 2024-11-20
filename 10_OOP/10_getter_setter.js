class User{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    set username(value){
        this._username=value
    }
    get username(){
        return this._username.toUpperCase()
    }

    set password(value){
        this._password=value
    }
    get password(){
        return `${this._password}abcd`
    }
}

const userOne=new User("ayush_ghavghave",213123)
console.log(userOne.username)
console.log(userOne.password)