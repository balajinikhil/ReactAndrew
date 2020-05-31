/*

*/

let toggle = true;

const toggleData = () => {
  toggle = !toggle;
  render();
};

const render = () => {
  const template = (
    <div>
      <h3>Visibility Toggle</h3>
      {toggle && <p>Data which toggles.</p>}
      <button className="btn" onClick={toggleData}>
        {toggle ? "Hide" : "Show"}
      </button>
    </div>
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();
