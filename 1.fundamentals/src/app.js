"use strict";

/*
There are 3 types of conditionals 
    >if else
    >ternary operator 
    >logical operator 



>if else
    Write if else condition inside a function and call the function inside jsx expression

-Undefined inside jsx dosen't render anything

*/

var user = {
  //   name: "Edward",
  age: 24,
  location: "Bangalore, India"
};

var getLocation = function getLocation(loc) {
  if (loc) {
    return React.createElement(
      "p",
      null,
      loc
    );
  }
  //if we dosen't return anything undefined will be returned
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name: ",
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

// ReactDOM.render(template, document.getElementById("app"));

/*
>Ternary operator
    jsx can handel ternary operator inside jsx expression, 
    (condition)?true:false

-undefined, null and boolean is ignored by jsx
*/

var template1 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name: ",
    user.name
  ),
  user.age > 18 ? React.createElement(
    "p",
    null,
    "Age ",
    user.age
  ) : null,
  getLocation(user.location)
);

// ReactDOM.render(template1, document.getElementById("app"));

/*
logical operators
    AND - true1 && true2 => true2 will be returned
        - false1 && false2 => false1 will be returned
    
    OR - true1 || true2 => true1 will be returned
        -false1 || false2 => false2 will be returned

*/

var template2 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age > 18 && React.createElement(
    "p",
    null,
    user.age
  ),
  getLocation(user.location)
);

// ReactDOM.render(template2, document.getElementById("app"));

/*
 */

var app = {
  title: "Indecision App",
  subtitle: "Put your life in hands of a computer",
  options: []
};

var template3 = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "p",
    null,
    app.options.length > 0 ? "Here are your options" : "No options"
  )
);

ReactDOM.render(template3, document.getElementById("app"));
