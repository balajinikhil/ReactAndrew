/*
Forms 
    React DOM events page 
        >Synthetic Events
        >Supported Events

    It works similary like in js
    On submit of form get request is made by passing values in url, 
    this can prevented by using form event handler
 */

const app = {
  title: "Indecision App",
  subtitle: "Put your life in hands of a computer",
  options: [],
};

let formSubmit = (e) => {
  e.preventDefault();
  let opt = e.target.elements.options.value;

  if (opt) {
    app.options.push(opt);
    e.target.elements.options.value = "";
  }
  renderApp();
};

let removeAll = () => {
  app.options = [];

  renderApp();
};

const renderApp = () => {
  let template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "here are your options" : "no options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        <li>Item one</li>
        <li>Item two</li>
      </ol>

      <form onSubmit={formSubmit}>
        <input type="text" name="options"></input>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};
renderApp();
