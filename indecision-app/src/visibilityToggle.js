/*
const app = {
  title: "Visibilty Toggle",
  status: "show details",
  text: false
};

const toggle = e => {
  if (app.status == "show details") {
    app.status = "hide details";
    app.text = "Here is your hidden text";
  } else {
    app.status = "show details";
    app.text = false;
  }

  renderTemp();
};

const renderTemp = () => {
  const temp = (
    <div>
      <h2>{app.title}</h2>
      <button onClick={toggle}>{app.status}</button>
      <p>{app.text}</p>
    </div>
  );

  ReactDOM.render(temp, document.getElementById("root"));
};

renderTemp();
*/

let visibilty = false;

const toggle = () => {
  visibilty = !visibilty;
  renderTemp();
};

const renderTemp = () => {
  const jsx = (
    <div>
      <h1>Visibilty Toggle</h1>
      <button onClick={toggle}>
        {visibilty ? "hide details" : "show details"}
      </button>
      {visibilty && <p>Hidden Text</p>}
    </div>
  );

  ReactDOM.render(jsx, document.getElementById("root"));
};

renderTemp();
