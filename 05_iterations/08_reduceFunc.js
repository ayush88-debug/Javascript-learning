const myarr = [1, 2, 3];

// const myTotal = myarr.reduce(function (acc, currValue) {
//   console.log(`accumulator:${acc}  Cuurent val:${currValue}`);
//   return acc + currValue;
// }, 0);


const myTotal = myarr.reduce((acc, currval) => acc + currval, 0);

console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js Course",
    itemPrice: 2999,
  },
  {
    itemName: "py Course",
    itemPrice: 999,
  },
  {
    itemName: "android dev Course",
    itemPrice: 13999,
  },
  {
    itemName: "DSA Course",
    itemPrice: 1999,
  },
];

const shoppingTotal = shoppingCart.reduce(
  (acc, item) => acc + item.itemPrice,
  0
);

console.log(shoppingTotal);
