import "./SetTitleInput.css";

const SetTitleInput = (props) =>{
    return(
        <div>
            <input className="SetTitleInput" type="text" placeholder={`Set întrebări ${props.setNo}`}/>
        </div>
    )
}

export default SetTitleInput;