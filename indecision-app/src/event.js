/*In ReactApp few html code format has been changed to camelCasing as it creates conflict with Javascript reserved keywords
ex- class ===> className
    on-click ===> onClick

    We can check the changed words in React DOM elements: https://reactjs.org/docs/dom-elements.html

*/

let count = 0;
const addCount = () => {
  count++;
  renderTemplate();
};
const lessCount = () => {
  count--;
  renderTemplate();
};
const resetCount = () => {
  count = 0;
  renderTemplate();
};

/*
JSX - dosen't have built in data binding */

const renderTemplate = () => {
  const template = (
    <div>
      <h2>{count}</h2>
      <button onClick={addCount}>+1</button>
      <button onClick={lessCount}>-1</button>
      <button onClick={resetCount}>Reset</button>
    </div>
  );

  ReactDOM.render(template, document.getElementById("root"));
};

renderTemplate();

/*React dosen't re-render entire template but uses virtualDOM
virtualDOM only re-renders only minimal number of changes  */
