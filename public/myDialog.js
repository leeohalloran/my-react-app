

function myDialog(props) {
    return (
        <div className="dialogStyle"> {props.message}</div>
    );

    function WelcomeDialog(props) {
        return (
            <Dialog message="Welcome to our app!" />
        );
    }
}