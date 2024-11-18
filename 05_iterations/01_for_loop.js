// for

for(let i=1; i<=10;i++){
    if(i==5){
        // console.log(`${i} is best number`)
    }
    // console.log(i)
}

for(let i=0;i<=5;i++){
    // console.log(`Outer loop ${i}`);
    for(let j=0;j<=5;j++){
        // console.log(`Inner loop ${j}`)
    }
    
}

let myArr=["ironman", "Batman" ,"spiderman"]
// console.log(myArr.length)
for (let i = 0; i < myArr.length; i++) {
    // console.log(myArr [i]);
    
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue;
    }
   console.log(`Value of i is ${index}`);
    
}
 // write a program to add two numbers