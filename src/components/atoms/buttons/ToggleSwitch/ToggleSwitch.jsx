import "./ToggleSwitch.css";
import TextLabel from "../../labels/TextLabel/TextLabel";

const ToggleSwitch = (props) => {
  return (
    <div>
      <TextLabel color={props.color}>{props.children}</TextLabel>
      <input type="checkbox" className="ToggleSwitch" onClick={props.onClick} />
    </div>
  );
};

export default ToggleSwitch;
