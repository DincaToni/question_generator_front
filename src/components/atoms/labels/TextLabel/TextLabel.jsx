import "./TextLabel.css";

function TextLabel(props){
    let text = props.children;
    return(
        <>
            <p className={`TextLabel-${props.color}`}>{text}</p>
        </>
    )
}

export default TextLabel;