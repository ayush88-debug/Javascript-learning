function setUsername(username){
    this.username=username
    console.log(`Username has been set`)
}
function createUser(username,email,password){
    
    setUsername.call(this , username)
    this.email=email
    this.password=password
}
const Ayush=new createUser("Ayush","aysuh@gmail.com",123456)
console.log(Ayush);