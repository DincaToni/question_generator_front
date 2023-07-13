import "./QuizzDisplay.css";
import TextLabel from "../../atoms/labels/TextLabel/TextLabel";
import StandardButton from "../../atoms/buttons/StandardButton/StandardButton";
import { FiDownload, FiEdit2, FiX } from "react-icons/fi";

const QuizzDisplay = (props) => {
  return (
    <div className={`QuizzDisplayWrapper QuizzDisplayWrapper-${props.color}`}>
      <div className="QuizzDisplayWrapper-titleOverflow">
        <TextLabel color="black" size={"medium"} overflowManagement={true}>
          {props.quizzTitle}
        </TextLabel>
      </div>
      <div className="QuizzDisplayWrapper-data">
        <TextLabel color="black" size={"medium"}>
          09/07/2023
        </TextLabel>
        <TextLabel color="black" size={"small"}>
          ultima modificare
        </TextLabel>
      </div>
      <StandardButton
        size="icon-small"
        edge="round"
        colorScheme={props.buttonsColorScheme}
      >
        PDF {<FiDownload />}
      </StandardButton>
      <StandardButton
        size="icon-small"
        edge="round"
        colorScheme={props.buttonsColorScheme}
      >
        <FiEdit2 />
      </StandardButton>
      <StandardButton
        size="icon-small"
        edge="round"
        colorScheme={props.buttonsColorScheme}
      >
        <FiX />
      </StandardButton>
    </div>
  );
};

export default QuizzDisplay;
