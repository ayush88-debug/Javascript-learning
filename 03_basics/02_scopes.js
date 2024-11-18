
let a=10;
if(true){
    let a=5;
    let b=20;
    console.log("inner",a);
    console.log("inner",b);
    var c=30  //so dont use var as there scope problem

}
console.log(a);
// console.log(b);
console.log(c);

// function one(){
//     let username="Ayush ";
//     function two(){
//         const website="Youtube"
//         console.log(username+website);
//     }
//     // console.log(website);
//     two()
    
// }
// one()


if(true){
    const username="Ayush "
    if(username=="Ayush "){
        const website="Youtuebe"
        // console.log(username+website);
    }
    // console.log(website)
}
// console.log(username)



// ********************************************************************
console.log(addone(5))
function addone(num){
    return num+2;
}


const addtwo=function(num){
    return num+2;
}
console.log(addtwo(10))