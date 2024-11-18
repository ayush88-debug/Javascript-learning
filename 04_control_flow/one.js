// *********************** if ***************************

let temperature=40

if(temperature <50){
    console.log(`Temperature is less than 50`)
}
else{
    console.log(`temperature is greter than 50`)
}

const score=66
if(score<=100){
    let power="swim"
    console.log(`User Power: ${power}`)
}
// console.log(`User Power: ${power}`)


const balance=1200
if(balance<500){
    console.log("Balance is less than 500");
}
else if(balance<700){
    console.log("balance is less than 700")
}
else if(balance <900){
    console.log("Balnce is less than 900")
}
else{
    console.log("Balance is less than 1200");
}

let UserLoggedIn=true
let HaveDebitCard=true
const LoginFromGoogle=true
const LoginMail=false


if(LoginFromGoogle || LoginMail){
    console.log("user Logged  in")
    if(UserLoggedIn && HaveDebitCard){
        console.log("User can buy cources")
    }
}