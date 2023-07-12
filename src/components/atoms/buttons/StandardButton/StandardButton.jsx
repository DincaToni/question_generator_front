import "./StandardButton.css";

const StandardButton = (props) => {
  return (
    <>
      <button
        className={
          "StandardButton StandardButton-" +
          props.size +
          " StandardButton-" +
          props.edge +
          " StandardButton-" +
          props.colorScheme
        }
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default StandardButton;
