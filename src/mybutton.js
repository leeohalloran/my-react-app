

function mybutton(props){
    return (
        <button onClick={props.handleClick}>{props.label}</button>
    );
}