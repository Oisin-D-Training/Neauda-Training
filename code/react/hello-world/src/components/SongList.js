import Songs from "./Songs";
import "../App.css";
import { useState } from "react";
import App from "../App";

const SongList = () => {
  const [toggle, setToggle] = useState(false);

  let buttonText = "Show Songs";
  let ulClass = "hidden";
  if (toggle === true) {
    buttonText = "Hide Songs";
    ulClass = "visible";
  }

  const toggleList = () => {
    setToggle(!toggle);
    console.log("Button clicked");
  };

  return (
    <div className="list">
      <h1>The Songs are:</h1>
      <button onClick={toggleList}>{buttonText}</button>
      <ul className={ulClass}>
        <li>
          <div className="details">
            <img
              className="image-size"
              src="https://veromerol.com.mx/wp-content/uploads/2017/03/Imagine-Dragons-Believer-Lil-Wayne-2019.jpg"
              alt="Believer"
            />
            <div className="title">
              <h3>Believer</h3>
              <h4>Imagine Dragons</h4>
            </div>
          </div>
        </li>
        <hr></hr>
        <br></br>
      </ul>

      <ul className={ulClass}>
        <li>
          <div className="details">
            <img
              className="image-size"
              src="https://thedailyaztec.com/wp-content/uploads/2021/04/Lil-Nas-X.png"
              alt="Call me by your name by lil nas x montero"
            />
            <div className="title">
              <h3>Call Me by Your Name</h3>
              <h4>Lil Nas X Montero</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default SongList;
