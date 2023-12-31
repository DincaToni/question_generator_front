import "./OQSet.css";
import { IconContext } from "react-icons";
import {
  FiXCircle,
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";

const OQSet = (props) => {
  return (
    <div>
      <IconContext.Provider value={{ size: "30px" }}>
        <div className="OQSet-titleWrapper">
          <h2>{props.setData.setName}</h2>
          <div className="OQSet-titleMenu">
            <FiEye />
          </div>
        </div>
        {props.setData.questions.map((question, index) => (
          <div className="OQSet-questionWrapper">
            <div className="OQSet-question">
              <p>{question}</p>
            </div>
            <div className="OQSet-QuestionMenu">
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

export default OQSet;
