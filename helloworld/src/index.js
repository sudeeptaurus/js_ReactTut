import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from './App';
import * as serviceWorker from "./serviceWorker";
import Avatar from "./Avatar";

// ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));
// ReactDOM.render(<h1>Hello World</h1>, document.getElementById('root'));
// ReactDOM.render(<React.StrictMode><Demo name="MCX Nair"/></React.StrictMode>, document.getElementById('root'));
ReactDOM.render(<Avatar/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
