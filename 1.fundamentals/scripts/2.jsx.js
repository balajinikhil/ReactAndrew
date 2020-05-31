/*
Note
    >JSX must have a single root element, all the elements of jsx must be wrapped inside a single root element 

*/

let template = (
  <div>
    <h1>Indecision App</h1>
    <p>Subtitle text....</p>
  </div>
);

let el = document.getElementById("app");

// ReactDOM.render(template, el);

/*
Solve

*/

let template2 = (
  <div>
    <h3>Edward</h3>
    <p>Age: 24</p>
    <p>location: Bangalore,India</p>
  </div>
);

// ReactDOM.render(template2, el);

/*
    To build web apps we need to render data dynamically, for that we must store value in variaable and display variable on the screen, which can be done using JSX expressions

JSX expressions
    >Way of rendering js variables and methods inside jsx
    { }
*/

let name = "Edaward";
let age = 24;
let loc = "Bangalore,India";

let template3 = (
  <div>
    <h1>{name.toUpperCase()}</h1>
    <p>{"age:" + age}</p>
    <p>location: {loc}</p>
  </div>
);

// ReactDOM.render(template3, el);

/*
    Dividing each elements into seperate varible is time consuming, we can pass all the variables as property to an object,
    JSX cannot render Object, but it can render object properties
    JSX can render strings and numbers
*/

let indecision = {
  title: "indecision app",
  subtitle: "Put your life in hands of computer...",
};

let template4 = (
  <div>
    <h1>{indecision.title.toUpperCase()}</h1>
    <p>{indecision.subtitle}</p>
  </div>
);

ReactDOM.render(template4, el);

/*
We can use jsx inside a jsx expression
*/
