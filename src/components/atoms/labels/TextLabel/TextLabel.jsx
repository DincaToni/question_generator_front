import "./TextLabel.css";

function TextLabel(props) {
  let text = props.children;
  return (
    <>
      <p
        className={`TextLabel TextLabel-${props.color} TextLabel-${
          props.size
        } TextLabel-${props.overflowManagement ? "overflow" : ""}`}
      >
        {text}
      </p>
    </>
  );
}

export default TextLabel;
