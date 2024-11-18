// *************** function*********
function sayMyName(){
    console.log("Ayush");
}

// sayMyName()

// function addTwoNum(num1,num2){
//     console.log(num1+num2);
// }
function addTwoNum(num1,num2){
    console.log("ayush");
    // let result=num1+num2
    // return result
    return num1+num2
}

const result =addTwoNum(3,5)
// console.log("Result:",result);

function loginUserMessage(username="sam"){
    if(username===undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ayush"));
// console.log(loginUserMessage());

function calculateCartPrice(...num1){   //Rest Operator(...)
    return num1
}
// console.log(calculateCartPrice(200,300,100,90,45));


// ************************* Object as function parameter***********
const user = {
    username:"ayush",
    price:199,
}
function handleObject(anyobject){
    console.log(`Username id ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username:"Sam",
//     price:300,
// })

// ***************************** Array as function parameter***********
const myArray=[200,700,600,300]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myArray));
// console.log(returnSecondValue([200,800,600,300]));

