const name ="Ayush Ghavghave"
const CGPA=9.56

console.log(`My name is ${name} and my CGPA is ${CGPA}`);

const MyName=new String('Ayush')
console.log(MyName);
console.log(MyName[0]);
console.log(MyName.__proto__);

// console.log(MyName.length);
// console.log(MyName.toUpperCase());
console.log(MyName.charAt(2));
console.log(MyName.indexOf("y"));

const newNmae=MyName.substring(0,3)
console.log(newNmae);


const anotherString=MyName.slice(-1,-2)
console.log(anotherString);

const newStringOne="    ayush  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://ayush.com//about%20ayush"
console.log(url.replace("%20","-"));
console.log(url.includes("piyush"));

const newNameTwo=new String("G H Raisoni College of Engineering")
console.log(newNameTwo.split(" ",3));