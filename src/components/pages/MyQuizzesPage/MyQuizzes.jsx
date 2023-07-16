import "./MyQuizzes.css";
import Menu from "../../templates/menu/Menu";
import QuizzDisplay from "../../molecules/QuizzDisplay/QuizzDisplay";
import { useGetQuizzesQuery } from "../../../slices/quizzApiSlice";

const MyQuizzes = (props) => {
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
                  quizId={quizz._id}
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
