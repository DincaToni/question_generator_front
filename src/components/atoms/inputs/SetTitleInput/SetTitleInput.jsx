import "./SetTitleInput.css";

const SetTitleInput = (props) => {
  return (
    <div>
      <input
        className="SetTitleInput"
        type="text"
        placeholder={`Set întrebări ${props.setNo + 1}`}
        onChange={props.onChange}
      />
    </div>
  );
};

export default SetTitleInput;
