const QuestionTypeSelect = () =>{
    return(
        <>
            <select>
                <option hidden>Selectează</option>
                <option value="freeQuestion">Întrebări libere</option>
                <option value="ansChoice">Grilă</option>
                <option value="completeField">Completează spațiul liber</option>
            </select>
        </>
    )
}

export default QuestionTypeSelect;