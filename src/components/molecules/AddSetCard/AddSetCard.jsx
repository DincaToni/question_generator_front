import QuestionTypeSelect from "../../atoms/QuestionTypeSelect/QuestionTypeSelect";
import ToggleSwitch from "../../atoms/buttons/ToggleSwitch/ToggleSwitch";
import NumberInput from "../../atoms/inputs/NumberInput/NumberInput";
import SetTitleInput from "../../atoms/inputs/SetTitleInput/SetTitleInput";
import TextLabel from "../../atoms/labels/TextLabel/TextLabel";
import "./AddSetCard.css";

function AddSetCard(props) {
  return (
    <div>
      <div className="QuestionSetCard">
        <div className="SetCardTitleWrapper">
          <SetTitleInput setNo={props.setNo} />
        </div>
        <div className="SetCardContent">
          <ToggleSwitch color="black">Ascunde titlul setului</ToggleSwitch>
          <div>
            <TextLabel color="black">Tip întrebări</TextLabel>
            <QuestionTypeSelect />
          </div>
          <div>
          <TextLabel color="black">Număr întrebări</TextLabel>
            <NumberInput/>
          </div>
          <ToggleSwitch color="black">
            Amestecă ordinea întrebărilor în interiorul setului
          </ToggleSwitch>
          <button>Șterge set</button>
        </div>
      </div>
    </div>
  );
}

export default AddSetCard;
