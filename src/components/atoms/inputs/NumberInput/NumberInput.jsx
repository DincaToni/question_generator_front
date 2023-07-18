const NumberInput = (props) => {
  return (
    <>
      <input
        type="number"
        onChange={props.onChange}
        value={props.nrOfQuestions}
      />
    </>
  );
};

export default NumberInput;
