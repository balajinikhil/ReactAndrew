/*
Class 
    is a ES6 feature for creating objects

Class is like a blueprint which can create multiple objects, all the objects created will be the instance of the class.

Syntax

    class className{
        constructor(params){
            this.property = value
        }
    }

    const objName = new className(args)

    new
        new keyword creates a new empty object
        binds this keyword to the created object
        emmits the use of return
    
    

Note-
    ClassNames must start with Capital letters
*/

class Person {
  constructor(name = "anonymous") {
    this.name = name;
  }
  greetings() {
    return `Hello ${this.name} `;
  }
}

let edward = new Person("edward");
console.log(edward.greetings());
console.log(edward);
