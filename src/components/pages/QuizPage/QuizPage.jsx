import "./QuizPage.css";
import { useLocation } from "react-router-dom";
import Menu from "../../templates/menu/Menu";
import { useGetQuizByIdQuery } from "../../../slices/quizzApiSlice";
import Title from "../../atoms/labels/Title/Title";
import OQSet from "../../molecules/OQSet/OQSet";
import BoolQuestionSet from "../../molecules/BoolQuestionSet/BoolQuestionSet";
import { IconContext } from "react-icons";
import {
  FiXCircle,
  FiArrowUpCircle,
  FiArrowDownCircle,
  FiDownload,
  FiPrinter,
} from "react-icons/fi";
import StandardButton from "../../atoms/buttons/StandardButton/StandardButton";

const QuizPage = (props) => {
  let { state } = useLocation();

  const { data, isLoading, error } = useGetQuizByIdQuery(state);
  console.log(data);
  return (
    <div className="QuizPageWrapper">
      <Menu />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="Quiz-content">
          <div className="Quiz-paperSize">
            <div className="Quiz-title">
              <Title>{data.quizzTitle}</Title>
            </div>
            {data.questionSets.map((set) => (
              <div className="Quiz-questionSetWrapper">
                <div className="QuestionSetMenu">
                  <IconContext.Provider value={{ size: "44px" }}>
                    <FiXCircle />
                    <FiArrowUpCircle />
                    <FiArrowDownCircle />
                  </IconContext.Provider>
                </div>
                <div className="Quiz-questionSet">
                  {set.questionType === 1 ? (
                    <OQSet setData={set} />
                  ) : set.questionType === 2 ? (
                    <BoolQuestionSet setData={set} />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <div className="Quiz-PageBottomButton">
            <StandardButton size="medium" colorScheme="green">
              Salvează modificările
            </StandardButton>
            <StandardButton size="medium" colorScheme="blackOnGreen">
              Descarcă <FiDownload />
            </StandardButton>
            <StandardButton size="medium" colorScheme="blackOnGreen">
              Printează <FiPrinter />
            </StandardButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
