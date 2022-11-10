// function Greeting(){
//     return (
//         <div>
//             <h1>Hello World</h1>
//         </div>
//     )
// }

import '../Greeting.css';

const Greeting = (props) => {
    return (
        <div>
            <h1>The Greeting is:</h1> 
            <p className = "greetingParagraph">Hello {props.name} you are {props.age} years old</p>
        </div>
    )
}

export default Greeting;