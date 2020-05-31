/*
React 

Why?
    >React library
        -small learning curve
        -fast
        -component based 
    >React community
        -fb, uber
        -tutorials
        
Setup
    >VSC
    >Node
    >yarn

CDN
    React and ReactDOM CDN from offical react page
    
JSX (javascript xml)
    -js syntax extension
    -provided by react, converts js code to html content 

 */

let template = React.createElement("h1", { id: "hello" }, "Hello World");
let app = document.getElementById("app");
ReactDOM.render(template, app);

/*
Note- js doesn't support jsx it's provided by react 

Bable
    js compiler which converts jsx to executable js

React.createElement('tag', 'attribute', 'content')
ReactDOM.render(-what we want to render, -where we want to render )


babel install is not as in video refer install-babel.txt and install all dependencies 
*/
