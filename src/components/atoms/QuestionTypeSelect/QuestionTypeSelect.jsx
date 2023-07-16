const QuestionTypeSelect = (props) => {
  return (
    <>
      <select onChange={props.onChange}>
        <option hidden>Selectează</option>
        <option value="1">Intrebari libere</option>
        <option value="ansChoice">Grilă</option>
        <option value="2">Adevarat/Fals</option>
      </select>
    </>
  );
};

export default QuestionTypeSelect;
