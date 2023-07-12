import "./RoundedInput.css";

const RoundedInput = (props) => {
  return (
    <div>
      <input
        className="RoundedInput"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      ></input>
    </div>
  );
};

export default RoundedInput;
