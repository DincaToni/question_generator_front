import "./MenuButton.css"

function MenuButton(props){
    let buttonText = props.text;
    return(
        <>
            <button className="MenuButton">{buttonText}</button>
        </>
    )
}

export default MenuButton;