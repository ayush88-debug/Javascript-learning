// const tinderUser = new Object()  //singalton object
const tinderUser = {}; //singalton object

tinderUser.id = "123abs";
tinderUser.name = "sam";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "someone@gmail",
  fullname: {
    userfullname: {
      fistname: "ayush",
      lastname: "ghavghave",
    },
  },
};
// console.log(regularUser.fullname.userfullname.fistname);

// concat objects
const obj1 = { 1: "a", 2: "b" };
const obj2 = {
  3: "c",
  4: "d",
};
const obj4 = {
  5: "c",
  6: "d",
};

// const obj3 = Object.assign({}, obj1, obj2, obj4);

const obj3 = { ...obj1, ...obj2, ...obj4 }; //spread method
// console.log(obj3);

// ************************ Onjects in Array**********************
const User = [
  {
    id: 1,
    email: "one@gmail",
  },
  {
    id: 2,
    email: "two@gmail",
  },
  {
    id: 3,
    email: "three@gmail",
  },
];

// console.log(User[1]);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


// ******************* De-structuring ************

const course = {
  courseName:"Js in Hindi",
  price:"999",
  courceInstructor: "Hitesh",
}

// course.courceInstructor

// const {courceInstructor}=course  //Destructuring
// console.log(courceInstructor);

const {courceInstructor: Instructor}=course  //Destructuring
console.log(Instructor);


