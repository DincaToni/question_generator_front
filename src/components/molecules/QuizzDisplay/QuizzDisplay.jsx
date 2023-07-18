import "./QuizzDisplay.css";
import TextLabel from "../../atoms/labels/TextLabel/TextLabel";
import StandardButton from "../../atoms/buttons/StandardButton/StandardButton";
import { FiDownload, FiEdit2, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

const QuizzDisplay = (props) => {
  return (
    <div className={`QuizzDisplayWrapper QuizzDisplayWrapper-${props.color}`}>
      <div className="QuizzDisplayWrapper-titleOverflow">
        <Link to={"/quiz"} state={props.quizId}>
          <TextLabel color="black" size={"medium"} overflowManagement={true}>
            {props.quizzTitle}
          </TextLabel>
        </Link>
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
        <FiEdit2 />
      </StandardButton>
      <StandardButton
        size="icon-small"
        edge="round"
        colorScheme={props.buttonsColorScheme}
        onClick={props.removeQuizHandler(props.quizId)}
      >
        <FiX />
      </StandardButton>
    </div>
  );
};

export default QuizzDisplay;
