import "./MenuButton.css";

function MenuButton(props) {
  let buttonText = props.text;
  return (
    <>
      <button className="MenuButton" onClick={props.onClick}>
        {buttonText}
      </button>
    </>
  );
}

export default MenuButton;
