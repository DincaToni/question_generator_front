import "./NewQuestionSetButton.css";

function NewQuestionSetButton( {onClick}){

    return(
        <div>
            <button className="AddQuestionSet" onClick={onClick}>Adaugă set întrebări</button>
        </div>
    );
}

export default NewQuestionSetButton;