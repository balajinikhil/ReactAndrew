/*
JSX dosen't have built in data binding, later will be done using components

*/

let count = 0;

const addOne = () => {
  count++;
  renderApp();
};

const minusOne = () => {
  count--;
  renderApp();
};

const reset = () => {
  count = 0;
  renderApp();
};

let renderApp = () => {
  let template = (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template, document.getElementById("app"));
};
renderApp();
