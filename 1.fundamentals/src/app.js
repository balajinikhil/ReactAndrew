"use strict";

/*

*/

var toggle = true;

var toggleData = function toggleData() {
  toggle = !toggle;
  render();
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h3",
      null,
      "Visibility Toggle"
    ),
    toggle && React.createElement(
      "p",
      null,
      "Data which toggles."
    ),
    React.createElement(
      "button",
      { className: "btn", onClick: toggleData },
      toggle ? "Hide" : "Show"
    )
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();
