/*
ES6 Arrow functions
    In ES6 arrow functions are function expressions,
    We can return single line by not including them in code block as shown below, 
    It can only be used for single line for multiple lines we have to use codeblock

*/

let squareNum = function (x) {
  return x * x;
};

console.log(squareNum(2));

// ES 6 arrow functions
let squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(4));

// shorthand
let squareArrowShort = (x) => x * x;
console.log(squareArrowShort(8));

/*getFirstName Challenge */
let getFirstName = (x) => x.split(" ")[0];
console.log(getFirstName("Edward Cullen"));

/*
ES6 arrow functions
    -arguments key word is not available,
    -this is no longer bound to the the object


    this keyword is bound to parent scope in arrow function

*/

const normalFunc = function () {
  console.log(arguments);
};
normalFunc(1, 2, 3, 4);

const user = {
  name: "Far Cry",
  places: ["Kyrat", "Rook Island"],
  getPlaces: function () {
    // this key word is bound to user object
    console.log(this.name);

    /*
    let that = this; //we can introduce that and bind that variable to this value
    this.places.forEach(function (e) {
      // this key word inside this function is no longer bound to user object
      console.log(this);

      console.log(that.name + " has been to " + e);
    });
    */

    this.places.forEach((e) => console.log(this.name + ` has been to ` + e));
  },
};

user.getPlaces();

// challenge
const multiply = {
  num: [2, 4, 6],
  multplier: 3,
  doMultiply: function () {
    return this.num.map((e) => this.num * this.multplier);
  },
};

multiply.doMultiply();
