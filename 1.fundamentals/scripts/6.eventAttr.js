/*

Events Attributes

Attributes 
    Some attributes have been renamed, some remain same
    It is done inorder to avoid conflict from reserve keywords.

    i.e 
    class -- className 

    react DOM elements
    DOCs page -> All supported HTML attributes

Note-
    >Attributes and Events support jsx expression
    >Can write functions inside jsx expression of event handler

*/

let count = 0;

const addCount = () => {
  console.log("addCount");
};

const subCount = () => {
  console.log("subCount");
};

const reset = () => {
  console.log("reset");
};

const template = (
  <div>
    <h3>Count : {count}</h3>
    <button onClick={addCount}>+1</button>
    <button onClick={subCount}>-1</button>
    <button onClick={reset}>0</button>
  </div>
);

ReactDOM.render(template, document.getElementById("app"));
