const app = {
  title: "Indecesion App",
  subtitle: "Give Control of your life to a computer",
  options: [],
};

const formSubmit = (e) => {
  e.preventDefault();
  let options = e.target.elements.option.value;
  app.options.push(options);
  e.target.elements.option.value = "";

  renderTemp();
};

const randomTask = () => {
  let random = Math.round(Math.random() * app.options.length - 1);
  let options = app.options[random];
  alert(options);
};

const reset = () => {
  app.options = [];
  renderTemp();
};
const renderTemp = () => {
  const jsx = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length == 0} onClick={randomTask}>
        What Should I Do ?
      </button>
      <button onClick={reset}>Remove All</button>
      <ol>
        {app.options.map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ol>

      <form onSubmit={formSubmit}>
        <input type="text" name="option"></input>
        <button>Add Options</button>
      </form>
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("root"));
};

renderTemp();
