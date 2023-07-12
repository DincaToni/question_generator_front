import "./GenerateButton.css";

function GenerateButton(props) {
  let buttonType = props.type;
  return (
    <div>
      <button className="generateButton" onClick={props.onClick}>
        Generează Întrebări
      </button>
    </div>
  );
}

export default GenerateButton;
