/*
Arrays in JSX 
    Arrays by default supported by jsx, 
    Each element is loop through in array and rendered as induvidual jsx elements,
    
>> Array elements in jsx must have a unique key value, it's done so that virtual DOM can keep track of the state of each element

*/

const app = {
  title: "Indecision App",
  subtitle: "Put your hands in life of computer",
  options: [],
};

let removeAll = () => {
  app.options = [];
  render();
};

let formSubmit = (e) => {
  e.preventDefault();

  let opt = e.target.elements.options.value;
  if (opt) {
    app.options.push(opt);
    e.target.elements.options.value = "";
    render();
  }
};

let randomSelect = () => {
  let opt = Math.floor(Math.random() * app.options.length);
  alert(app.options[opt]);
};

const render = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 1 ? "here are your options" : "no options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove all</button>
      <button disabled={app.options.length === 0} onClick={randomSelect}>
        What Should I do?
      </button>
      <ol>
        {app.options.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ol>

      <form onSubmit={formSubmit}>
        <input type="text" name="options"></input>
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();

/*
What should i do?
    Get a random number and floor it and alert the option
*/
