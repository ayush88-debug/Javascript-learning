// ********* this in objects****************

const user = {
  username: "ayush",
  price: 999,

  welcomeUser: function () {
    console.log(`Hello ${this.username}`);
    console.log(this);
  },
};

// user.welcomeUser()
// user.username="Sam"
// user.welcomeUser()

// ************ this in funtion

const message = function () {
  let user = "ayush";
  // console.log(this.user);
};
message();

function message1() {
  let user = "ayush";
    // console.log(this);
}
message1();

const message2 = () => {
  let user = "ayush";
    // console.log(this);
};
message2();

const addOne = (num1, num2) => {
  return num1 + num2;
};
console.log(addOne(3, 4));



const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(9, 1));

const multiply = (num1, num2) => ({ username: "Piyush" });
console.log(multiply(5, 4));

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
