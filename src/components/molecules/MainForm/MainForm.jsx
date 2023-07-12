import "./MainForm.css";

import NewQuestionSetButton from "../../atoms/buttons/NewQuestionSetButton/NewQuestionSetButton";
import GenerateButton from "../../atoms/buttons/generateButton/GenerateButton";
import TextNFileInput from "../../atoms/inputs/TextNFileInput";
import AddSetCard from "../AddSetCard/AddSetCard";

import { useState } from "react";

function MainForm(props) {
  const [questionSetList, setQuestionSetList] = useState([{ setNo: 1 }]);
  const addQuestionSet = () => {
    setQuestionSetList([
      ...questionSetList,
      { setNo: questionSetList.pop().setNo + 1 },
    ]);
  };

  return (
    <div className="MainFormWrapper">
      <div className="MainForm">
        <TextNFileInput onChange={props.promptHandler} />
        {questionSetList.map((questionSet) => (
          <AddSetCard setNo={questionSet.setNo} />
        ))}
        <div className="BtnDistance">
          <NewQuestionSetButton onClick={addQuestionSet} />
        </div>
        <GenerateButton />
      </div>
    </div>
  );
}

export default MainForm;
