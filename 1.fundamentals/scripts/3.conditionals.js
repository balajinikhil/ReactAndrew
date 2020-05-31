/*
There are 3 types of conditionals 
    >if else
    >ternary operator 
    >logical operator 



>if else
    Write if else condition inside a function and call the function inside jsx expression

-Undefined inside jsx dosen't render anything

*/

let user = {
  //   name: "Edward",
  age: 24,
  location: "Bangalore, India",
};

const getLocation = (loc) => {
  if (loc) {
    return <p>{loc}</p>;
  }
  //if we dosen't return anything undefined will be returned
};

let template = (
  <div>
    <h1>Name: {user.name}</h1>
    <p>Age: {user.age}</p>
    {getLocation(user.location)}
  </div>
);

// ReactDOM.render(template, document.getElementById("app"));

/*
>Ternary operator
    jsx can handel ternary operator inside jsx expression, 
    (condition)?true:false

-undefined, null and boolean is ignored by jsx
*/

let template1 = (
  <div>
    <h1>Name: {user.name}</h1>
    {user.age > 18 ? <p>Age {user.age}</p> : null}
    {getLocation(user.location)}
  </div>
);

// ReactDOM.render(template1, document.getElementById("app"));

/*
logical operators
    AND - true1 && true2 => true2 will be returned
        - false1 && false2 => false1 will be returned
    
    OR - true1 || true2 => true1 will be returned
        -false1 || false2 => false2 will be returned

*/

let template2 = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age > 18 && <p>{user.age}</p>}
    {getLocation(user.location)}
  </div>
);

// ReactDOM.render(template2, document.getElementById("app"));

/*
 */

let app = {
  title: "Indecision App",
  subtitle: "Put your life in hands of a computer",
  options: [],
};

let template3 = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
  </div>
);

ReactDOM.render(template3, document.getElementById("app"));
