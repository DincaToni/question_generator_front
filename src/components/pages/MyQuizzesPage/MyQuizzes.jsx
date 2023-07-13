import "./MyQuizzes.css";
import Menu from "../../templates/menu/Menu";
import QuizzDisplay from "../../molecules/QuizzDisplay/QuizzDisplay";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetQuizzesQuery } from "../../../slices/quizzApiSlice";

const MyQuizzes = (props) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { data, isLoading, error } = useGetQuizzesQuery();

  return (
    <div className="MyQuizzesPageWrapper">
      <Menu />
      <div className="MyQuizzes-content">
        <div className="MyQuizzes-card">
          {error ? (
            <>Oh no, there was an error</>
          ) : isLoading ? (
            <>Loading...</>
          ) : data ? (
            <>
              {data.map((quizz, index) => (
                <QuizzDisplay
                  color={index % 2 === 0 ? "white" : "green"}
                  buttonsColorScheme={
                    index % 2 === 0 ? "blackOnGreen" : "blackOnWhite"
                  }
                  quizzTitle={quizz.quizzTitle}
                />
              ))}
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyQuizzes;
