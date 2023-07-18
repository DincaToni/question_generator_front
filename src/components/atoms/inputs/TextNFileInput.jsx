import "./TextNFileInput.css";

function TextNFileInput(props) {
  return (
    <div className="textInputWrapper">
      <textarea
        className="textInput"
        type="text"
        onChange={props.onChange}
      ></textarea>
    </div>
  );
}

export default TextNFileInput;
