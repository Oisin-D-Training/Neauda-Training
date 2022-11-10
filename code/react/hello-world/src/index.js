import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// //VERSION 1
// const p1 = React.createElement('p', {id : "firstParagraph"}, 'This is paragraph 1');
// const p2 = React.createElement('p', {id : "secondParagraph"}, 'This is paragraph 2');
// const mainDiv = React.createElement('div', {id : "mainDiv"}, [p1, p2]);

// root.render(mainDiv);

// // VERSION 2
// const p1 = <p id="firstParagraph">This is paragraph 1</p>;
// const p2 = <p id="secondParagraph">This is paragraph 2</p>;
// const myList = (
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>
// );
// const mainDiv = <div id="mainDiv">{p1}{p2}{myList}</div>;
// root.render(mainDiv);

// //VERSION 3
// const mainDiv = <div id="main" className = "firstDiv"> {/* className is used instead of class */}
//   <p id="firstParagraph">This is paragraph 1</p>
//   <p id="secondParagraph">This is paragraph 2</p>
//   <ul>
//     <li>Item 1</li>
//     <li>Item 2</li>
//     <li>Item 3</li>
//   </ul>
// </div>
// root.render(mainDiv);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
