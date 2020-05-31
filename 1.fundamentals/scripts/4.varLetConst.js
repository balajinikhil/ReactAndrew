/*
In ES 6 version two new key words was introduced to declare a variable,
let and const 

Difference between var, let and const

>var
    Can reassign and redeclare
    function level scope

>let
    can reassign, redclare error will occur
    block level scope

>const 
    once declared cann't reassign and redclare
    block level scope

*/

//var
var name = "Hello";
name = "world";
var name = "Hello World";
console.log(name);

// let
let name1 = "I'm let";
name1 = "reassigned";
// let name1 = "redeclare"

console.log(name1);

// const
const name2 = "I'm const";
// name2 = "reassign";
// const name2 = "redeclare";
console.log(name2);

/* function level scope
    Values inside the function code block canno't be accessed outside
*/
function varFunc() {
  var a = "I'm inside the function";
}
// console.log(a);

/* Block level scope
    Values inside code block cannot be acessed outside the code block

*/
if (1 === 1) {
  let b = "I'm inside the block";
  const c = "I'm available only inside code block ";
}
// console.log(b);
