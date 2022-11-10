import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

//VERSION 1
// const p1 = React.createElement("p",{id : "firstPara"} , "This is paragraph 1");
// const p2 = React.createElement("p",null, "This is paragraph 2");

// const myList = React.createElement("ul", null, [
//   React.createElement("li",null, "item 1"),
//   React.createElement("li",null, "item 2"),
//   React.createElement("li",null, "item 3")
// ]);

// const mainDiv = React.createElement("div", {name : "myDiv", id : "firstDiv"}, [p1, p2, myList]);

//VERSION 2
// const p1 = <p id="firstPara">This is paragraph 1</p>;
// const p2 = <p>This is paragraph 2</p>;
// const myList = <ul>
//   <li>item 1</li>
//   <li>item 2</li>
//   <li>item 3</li>
// </ul>;
// const mainDiv = <div>
//   {p1}{p2}{myList}
// </div>

//VERSION 3

// const myName = "Matt";

// const mainDiv = <div id="main" className="firstDiv">
//   <p>This is the first paragraph. Hello {myName}</p>
//   <p>This is the second paragraph</p>
//   <ul>
//     <li>First item</li>
//     <li>Second item</li>
//     <li>Third item</li>
//   </ul>
//   <label htmlFor="firstName" >First name</label>
//   <input id="firstName" type="text" required="true" />
//   <p>The total of 7 + 9 is {7 + 9}</p>
// </div>

// root.render(mainDiv);

/*
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ul>
*/

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
