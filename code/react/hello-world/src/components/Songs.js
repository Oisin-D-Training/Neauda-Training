const Songs = (props) => {
    return (
        <div>
            <h1>The Songs are:</h1>
            <li>{props.list} {props.title} {props.details}</li> 
        </div>
    )
}

export default Songs;