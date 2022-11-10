import './Greeting.css';

const Greeting = (props) => {
    return <p className="greeting-paragraph">Hello {props.name}, you are {props.age} years old.</p>; 
}

export default Greeting;