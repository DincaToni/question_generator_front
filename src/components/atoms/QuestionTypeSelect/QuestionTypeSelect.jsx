const QuestionTypeSelect = (props) => {
  return (
    <>
      <select onChange={props.onChange}>
        <option hidden>Selectează</option>
        <option value="freeQuestion">Intrebari libere</option>
        <option value="ansChoice">Grilă</option>
        <option value="completeField">Completează spațiul liber</option>
      </select>
    </>
  );
};

export default QuestionTypeSelect;
