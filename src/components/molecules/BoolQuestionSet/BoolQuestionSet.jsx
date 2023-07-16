import "./BoolQuestionSet.css";
import { IconContext } from "react-icons";
import {
  FiXCircle,
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const BoolQuestionSet = (props) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "30px" }}>
        <div className="BoolQS-titleWrapper">
          <h2>{props.setData.setName}</h2>
          <div className="BoolQS-titleMenu">
            <FiEye />
          </div>
        </div>
        {props.setData.questions.map((question) => (
          <div className="BoolQS-questionWrapper">
            <div className="BoolQS-question">
              <p>{question}</p>
              <p>a) True</p>
              <p>b) False</p>
            </div>
            <div className="BoolQS-QuestionMenu">
              <FiXCircle />
              <FiArrowUpCircle />
              <FiArrowDownCircle />
            </div>
          </div>
        ))}
      </IconContext.Provider>
    </div>
  );
};

export default BoolQuestionSet;
