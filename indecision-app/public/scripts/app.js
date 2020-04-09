"use strict";

var app = {
  title: "Indecesion App",
  subtitle: "Give Control of your life to a computer",
  options: []
};

var formSubmit = function formSubmit(e) {
  e.preventDefault();
  var options = e.target.elements.option.value;
  app.options.push(options);
  e.target.elements.option.value = "";

  renderTemp();
};

var randomTask = function randomTask() {
  var random = Math.round(Math.random() * app.options.length);
  var options = app.options[random];
  alert(options);
};

var reset = function reset() {
  app.options = [];
  renderTemp();
};
var renderTemp = function renderTemp() {
  var jsx = React.createElement(
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
      app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
      "button",
      { disabled: app.options.length == 0, onClick: randomTask },
      "What Should I Do ?"
    ),
    React.createElement(
      "button",
      { onClick: reset },
      "Remove All"
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
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        null,
        "Add Options"
      )
    )
  );

  ReactDOM.render(jsx, document.getElementById("root"));
};

renderTemp();
