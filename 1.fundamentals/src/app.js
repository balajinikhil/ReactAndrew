"use strict";

/*
Arrays in JSX 
    Arrays by default supported by jsx, 
    Each element is loop through in array and rendered as induvidual jsx elements,
    
>> Array elements in jsx must have a unique key value, it's done so that virtual DOM can keep track of the state of each element

*/

var app = {
  title: "Indecision App",
  subtitle: "Put your hands in life of computer",
  options: []
};

var removeAll = function removeAll() {
  app.options = [];
  render();
};

var formSubmit = function formSubmit(e) {
  e.preventDefault();

  var opt = e.target.elements.options.value;
  if (opt) {
    app.options.push(opt);
    e.target.elements.options.value = "";
    render();
  }
};

var randomSelect = function randomSelect() {
  var opt = Math.floor(Math.random() * app.options.length);
  alert(app.options[opt]);
};

var render = function render() {
  var template = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "p",
      null,
      app.options.length > 1 ? "here are your options" : "no options"
    ),
    React.createElement(
      "p",
      null,
      app.options.length
    ),
    React.createElement(
      "button",
      { onClick: removeAll },
      "Remove all"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length === 0, onClick: randomSelect },
      "What Should I do?"
    ),
    React.createElement(
      "ol",
      null,
      app.options.map(function (e) {
        return React.createElement(
          "li",
          { key: e },
          e
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: formSubmit },
      React.createElement("input", { type: "text", name: "options" }),
      React.createElement(
        "button",
        null,
        "Add Option"
      )
    )
  );

  ReactDOM.render(template, document.getElementById("app"));
};
render();

/*
What should i do?
    Get a random number and floor it and alert the option
*/
