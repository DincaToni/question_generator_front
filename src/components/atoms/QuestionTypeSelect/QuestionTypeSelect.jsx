const QuestionTypeSelect = (props) => {
  return (
    <>
      <select onChange={props.onChange} value={props.questionType}>
        <option hidden>Selectează</option>
        <option value="1">Intrebari libere</option>
        <option value="2">Adevarat/Fals</option>
      </select>
    </>
  );
};

export default QuestionTypeSelect;
