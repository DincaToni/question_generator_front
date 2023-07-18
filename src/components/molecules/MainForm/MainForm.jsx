import "./MainForm.css";

import NewQuestionSetButton from "../../atoms/buttons/NewQuestionSetButton/NewQuestionSetButton";
import GenerateButton from "../../atoms/buttons/generateButton/GenerateButton";
import TextNFileInput from "../../atoms/inputs/TextNFileInput";
import AddSetCard from "../AddSetCard/AddSetCard";

import { useState } from "react";

function MainForm(props) {
  return (
    <div className="MainFormWrapper">
      <div className="MainForm">
        <TextNFileInput onChange={props.promptHandler} />
        {props.questionSetList.map((questionSetNo) => (
          <AddSetCard
            setNo={questionSetNo}
            questionNameHandler={props.questionNameHandler(questionSetNo)}
            nameValue={props.nameValue[questionSetNo]}
            isNameHiddenHandler={props.isNameHiddenHandler(questionSetNo)}
            questionType={props.questionType[questionSetNo]}
            questionTypeHandler={props.questionTypeHandler(questionSetNo)}
            nrOfQuestions={props.nrOfQuestions[questionSetNo]}
            nrOfQuestionsHandler={props.nrOfQuestionsHandler(questionSetNo)}
            isQuestionOrderRandomizedHandler={props.isQuestionOrderRandomizedHandler(
              questionSetNo
            )}
            deleteQuestionSetHandler={props.deleteQuestionSetHandler(
              questionSetNo
            )}
          />
        ))}
        <div className="BtnDistance">
          <NewQuestionSetButton onClick={props.addQuestionSetHandler} />
        </div>
        <GenerateButton onClick={props.submitHandler} />
      </div>
    </div>
  );
}

export default MainForm;
