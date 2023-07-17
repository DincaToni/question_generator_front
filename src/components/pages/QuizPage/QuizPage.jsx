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
import { useState, useEffect } from "react";

const QuizPage = (props) => {
  let { state } = useLocation();

  const { data, isLoading, error } = useGetQuizByIdQuery(state);

  const [quiz, setQuiz] = useState();
  useEffect(() => {
    setQuiz(data);
    console.log(data);
  }, [data]);

  const ArrowUpClick = (quiz, index) => {
    let newQuestionSets = [...quiz.questionSets];
    const qs = newQuestionSets.splice(index, 1);
    newQuestionSets.splice(index - 1, 0, qs[0]);
    const quizCopy = Object.assign({}, quiz);
    quizCopy.questionSets = [...newQuestionSets];
    setQuiz(quizCopy);
  };

  const ArrowDownClick = (quiz, index) => {
    let newQuestionSets = [...quiz.questionSets];
    const qs = newQuestionSets.splice(index, 1);
    newQuestionSets.splice(index + 1, 0, qs[0]);
    const quizCopy = Object.assign({}, quiz);
    quizCopy.questionSets = [...newQuestionSets];
    setQuiz(quizCopy);
  };

  const XClick = (quiz, index) => {
    let newQuestionSets = [...quiz.questionSets];
    newQuestionSets.splice(index, 1);
    const quizCopy = Object.assign({}, quiz);
    quizCopy.questionSets = [...newQuestionSets];
    setQuiz(quizCopy);
  };

  const ArrowUpClickQuestion = (quiz, setIndex, questionIndex) => {
    let newQuestionSet = [...quiz.questionSets[setIndex].questions];
    const q = newQuestionSet.splice(questionIndex, 1);
    newQuestionSet.splice(questionIndex - 1, 0, q[0]);
    const quizCopy = structuredClone(quiz);
    quizCopy.questionSets[setIndex].questions = [...newQuestionSet];
    setQuiz(quizCopy);
  };

  const ArrowDownClickQuestion = (quiz, setIndex, questionIndex) => {
    let newQuestionSet = [...quiz.questionSets[setIndex].questions];
    const q = newQuestionSet.splice(questionIndex, 1);
    newQuestionSet.splice(questionIndex + 1, 0, q[0]);
    const quizCopy = structuredClone(quiz);
    quizCopy.questionSets[setIndex].questions = [...newQuestionSet];
    setQuiz(quizCopy);
  };

  const XClickQuestion = (quiz, setIndex, questionIndex) => {
    let newQuestionSet = [...quiz.questionSets[setIndex].questions];
    newQuestionSet.splice(questionIndex, 1);
    const quizCopy = structuredClone(quiz);
    quizCopy.questionSets[setIndex].questions = [...newQuestionSet];
    setQuiz(quizCopy);
  };

  return (
    <div className="QuizPageWrapper">
      <Menu />
      {!quiz ? (
        <h1>Loading...</h1>
      ) : quiz ? (
        <div className="Quiz-content">
          <div className="Quiz-paperSize">
            <div className="Quiz-title">
              <Title>{quiz.quizzTitle}</Title>
            </div>
            {quiz.questionSets.map((set, index) => (
              <div className="Quiz-questionSetWrapper">
                <div className="QuestionSetMenu">
                  <IconContext.Provider value={{ size: "44px" }}>
                    <div
                      onClick={(e) => {
                        XClick(quiz, index);
                      }}
                    >
                      <FiXCircle />
                    </div>
                    <div
                      onClick={(e) => {
                        ArrowUpClick(quiz, index);
                      }}
                    >
                      <FiArrowUpCircle />
                    </div>
                    <div
                      onClick={(e) => {
                        ArrowDownClick(quiz, index);
                      }}
                    >
                      <FiArrowDownCircle />
                    </div>
                  </IconContext.Provider>
                </div>
                <div className="Quiz-questionSet">
                  {set.questionType === 1 ? (
                    <OQSet
                      setData={set}
                      ArrowUpClickQuestion={ArrowUpClickQuestion}
                      ArrowDownClickQuestion={ArrowDownClickQuestion}
                      XClickQuestion={XClickQuestion}
                      setIndex={index}
                      quiz={quiz}
                    />
                  ) : set.questionType === 2 ? (
                    <BoolQuestionSet
                      setData={set}
                      ArrowUpClickQuestion={ArrowUpClickQuestion}
                      ArrowDownClickQuestion={ArrowDownClickQuestion}
                      XClickQuestion={XClickQuestion}
                      setIndex={index}
                      quiz={quiz}
                    />
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
      ) : error ? (
        <h1>{error.message}</h1>
      ) : null}
    </div>
  );
};

export default QuizPage;
