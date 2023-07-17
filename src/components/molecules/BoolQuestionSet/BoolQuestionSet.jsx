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
        {props.setData.questions.map((question, index) => (
          <div className="BoolQS-questionWrapper">
            <div className="BoolQS-question">
              <p>{question}</p>
              <p>a) True</p>
              <p>b) False</p>
            </div>
            <div className="BoolQS-QuestionMenu">
              <div
                onClick={() => {
                  props.XClickQuestion(props.quiz, props.setIndex, index);
                }}
              >
                <FiXCircle />
              </div>
              <div
                onClick={() => {
                  props.ArrowUpClickQuestion(props.quiz, props.setIndex, index);
                }}
              >
                <FiArrowUpCircle />
              </div>
              <div
                onClick={() => {
                  props.ArrowDownClickQuestion(
                    props.quiz,
                    props.setIndex,
                    index
                  );
                }}
              >
                <FiArrowDownCircle />
              </div>
            </div>
          </div>
        ))}
      </IconContext.Provider>
    </div>
  );
};

export default BoolQuestionSet;
