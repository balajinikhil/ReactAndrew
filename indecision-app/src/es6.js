let template = <h1>Hello World</h1>;

let appRoot = document.getElementById("root");

ReactDOM.render(template, appRoot);

/*
var - can assign, redefine and reassign variables  
const - can assign variable once, can't reassign or redefine
let - can reassign but can't redefine variable

es6 Arrow Functions
() =>  returns this 

() => {
    //code here
 }

 1. Always anonymous 
 2. return one line code 
 3. arguments objects no longer bound with arrow function
 4. this keyword no longer bound to the object it will be bound to the parent scope

*/

const multiplier = {
  numbers: [2, 4, 6, 8, 10],
  multiplyBy: 2,
  mutilpy() {
    return this.numbers.map(e => e * this.multiplyBy);
  }
};

console.log(multiplier.mutilpy());
