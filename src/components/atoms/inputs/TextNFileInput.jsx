import "./TextNFileInput.css";

function TextNFileInput(props) {
  return (
    <div className="textInputWrapper">
      <input
        className="textInput"
        type="text"
        onChange={props.onChange}
      ></input>
    </div>
  );
}

export default TextNFileInput;
