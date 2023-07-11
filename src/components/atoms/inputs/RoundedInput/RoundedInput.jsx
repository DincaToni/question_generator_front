import "./RoundedInput.css";

const RoundedInput = (props) => {
  return (
    <div>
      <input
        className="RoundedInput"
        type={props.type}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default RoundedInput;
