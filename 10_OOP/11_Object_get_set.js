const User={
    _username:"ayush_ghavghave",
    _password:1234241,

    set username(value){
        this._username=value
    },

    get username(){
        return this._username.toUpperCase()
    }
}

const userOne=Object.create(User)
console.log(userOne.username)