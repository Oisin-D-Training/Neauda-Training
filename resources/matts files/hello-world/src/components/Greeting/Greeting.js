
import { useState } from 'react';
import './Greeting.css';

const Greeting = (props) => {

    const [name, setName] = useState(props.name);

    const changeName = () => {
        console.log("button was clicked");
        setName("Sally");
    }

    return <div>
        <p className="greeting-paragraph">Hello {name}, 
        you are {props.age} years old.</p>
        <button onClick={changeName}>change the name</button>
    </div>;
}

export default Greeting;