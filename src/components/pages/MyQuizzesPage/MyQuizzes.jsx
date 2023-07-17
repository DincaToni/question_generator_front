import "./MyQuizzes.css";
import Menu from "../../templates/menu/Menu";
import QuizzDisplay from "../../molecules/QuizzDisplay/QuizzDisplay";
import { useGetQuizzesQuery } from "../../../slices/quizzApiSlice";
import { useSelector } from "react-redux";

const MyQuizzes = (props) => {
  const { userInfo } = useSelector((state) => state.auth);
  const uid = userInfo._id;

  const { data, isLoading, error } = useGetQuizzesQuery(uid);

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
            data.length === 0 ? (
              <h1>Nu aveți teste incă</h1>
            ) : (
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
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default MyQuizzes;
