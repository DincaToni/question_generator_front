import "./MyQuizzes.css";
import Menu from "../../templates/menu/Menu";

const MyQuizzes = (props) => {
  return (
    <div className="MyQuizzesPageWrapper">
      <Menu />
      <div className="MyQuizzes-content">
        <div className="MyQuizzes-card"></div>
      </div>
    </div>
  );
};

export default MyQuizzes;
