// Dates

let MyDate=new Date()
console.log(MyDate.toString());
// console.log(MyDate.toISOString());
console.log(MyDate.toDateString());
console.log(MyDate.toTimeString());
// console.log(MyDate.toLocaleString());

console.log(typeof(MyDate));

// let myCraetedDate=new Date(2023,0,23)
// let myCraetedDate=new Date(2023,0,23,5,3)
// let myCraetedDate=new Date("2023-04-25")
let myCraetedDate=new Date("05-04-2025")
console.log(myCraetedDate.toLocaleString());

// TimeStamp
let myTimestamp=Date.now()
console.log(myTimestamp);        //time in millisecond
console.log(myCraetedDate.getTime()); //time in millisecond

console.log(Math.floor(Date.now()/1000));  //convert time in second

let newDate=new Date()
console.log(newDate.toLocaleString());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday: "long",
})
console.log(newDate.toLocaleString('default',{
    weekday: "long",
    day:"2-digit",
    month:"short",
    year:"numeric"
}));