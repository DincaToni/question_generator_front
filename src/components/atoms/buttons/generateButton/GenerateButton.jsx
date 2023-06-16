import "./GenerateButton.css"

function GenerateButton(props){
    let buttonType = props.type;
    return(
        <div>
            <button className="generateButton">Generează Întrebări</button>
        </div>
    );
}

export default GenerateButton;