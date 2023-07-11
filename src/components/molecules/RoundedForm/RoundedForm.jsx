import "./RoundedForm.css";
import StandardButton from "../../atoms/buttons/StandardButton/StandardButton";
import RoundedInput from "../../atoms/inputs/RoundedInput/RoundedInput";
import Title from "../../atoms/labels/Title/Title";

const RoundedForm = (props) => {
  const inputs = props.inputs;
  return (
    <div className="RoundedForm">
      <div className="RoundedForm-Title">
        <Title>{props.title}</Title>
      </div>
      {inputs.map((input) => (
        <div className="RoundedForm-RoundedInputWrapper">
          <RoundedInput type={input.type} placeholder={input.placeholder} />
        </div>
      ))}
      <div className="RoundedForm-Button">
        <StandardButton size="medium" edge="round" colorScheme="green">
          {props.buttonText}
        </StandardButton>
      </div>
    </div>
  );
};

export default RoundedForm;
