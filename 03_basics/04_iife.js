// Immediately Invoked Function Expressions (IIFE)

(function displayName() {
  // named IIFE
  console.log("Ayush Ghavghave");
})();

((name) => {
  console.log(`${name} Ghavghave`);
})("Piyush");

console.log(((num) => num + num)(2));
