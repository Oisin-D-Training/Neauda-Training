import "../Greeting.css";

import { useState } from "react";

const Greeting = (props) => {
  const [name, setName] = useState(props.name);

  const changeName = () => {
    setName("Potato");
    console.log("Button clicked");
  };

  const changeNameBack = () => {
    setName(props.name);
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>The Greeting is:</h1>
      <p className="greetingParagraph">
        Hello {name} you are {props.age} years old
      </p>
      <button onClick={changeName}>Change the Name</button>
      <button onClick={changeNameBack}>Change the Name Back</button>
    </div>
  );
};

export default Greeting;
