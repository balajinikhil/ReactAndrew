//JSX - JavaScript  XML
//JSX expression {}
/*JSX - conditional rendering
    1. if statments
    2. Ternary operator
    3. logical AND operator
    */

//CHALLENGE
let app = {
  title: "Indecision-App",
  subtitle: "Put your life in hands of computer",
  options: ["One", "Two"]
};

let templateOne = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : " No options"}</p>
    <ol>
      <li>Item One</li>
      <li>Item Two</li>
    </ol>
  </div>
);

//LEARNING
let user = {
  name: "Balaji S",
  age: 23,
  location: "Bengaluru Karnataka India"
};

function getLocation(location) {
  if (location) {
    return <p>Location : {location}</p>;
  }
}

let templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    <p>Age: {user.age && user.age >= 18 && user.age}</p>
    {getLocation(user.location)}
  </div>
);

let appHolder = document.getElementById("root");

ReactDOM.render(templateOne, appHolder);
