const app = {
  title: "Indecision App",
  subtitle: "Let a computer control your LIFE",
  options: []
};

const submitForm = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
  }

  renderTemp();
};

const removeAll = () => {
  app.options = [];
  renderTemp();
};

const renderTemp = () => {
  const temp = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <p>{app.options.length}</p>
      <button onClick={removeAll}>Remove All</button>

      <ol>
        {app.options.map(e => {
          return <li key={e}>{e}</li>;
        })}
      </ol>
      <form onSubmit={submitForm}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(temp, document.getElementById("root"));
};

renderTemp();
