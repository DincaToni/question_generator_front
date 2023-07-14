import "./HomePage.css";

import Title from "../../atoms/labels/Title/Title";
import Menu from "../../templates/menu/Menu";
import MainForm from "../../molecules/MainForm/MainForm";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../../slices/authSlice";
import { useLogoutMutation } from "../../../slices/userApiSlice";
import { logout } from "../../../slices/authSlice";
import { useAddQuizzMutation } from "../../../slices/quizzApiSlice";
import { toast } from "react-toastify";

function HomePage(props) {
  const [prompt, setPrompt] = useState("");
  const [questionSetName, setQuestionSetName] = useState([]);
  const [isNameHidden, setIsNameHidden] = useState([false]);
  const [questionType, setQuestionType] = useState([]);
  const [nrOfQuestions, setNrOfQuestions] = useState([]);
  const [isQuestionOrderRandomised, setIsQuestionOrderRandomised] = useState([
    false,
  ]);
  const [questionSetList, setQuestionSetList] = useState([0]);
  const quizzTitle = "Quizz";

  useEffect(() => {
    setQuestionSetName([
      ...questionSetName,
      `Set întrebări ${questionSetList[questionSetList.length - 1] + 1}`,
    ]);
  }, [questionSetList]);

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [logoutApiCall] = useLogoutMutation();
  const [addQuizz] = useAddQuizzMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap;
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  const promptHandler = (e) => {
    setPrompt(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    let questionSets = [];
    questionSetList.map((questionSet) => {
      questionSets.push({
        setName: questionSetName[questionSet],
        isSetNameHidden: isNameHidden[questionSet],
        questionType: questionType[questionSet],
        nrOfQuestions: nrOfQuestions[questionSet],
        isQuestionOrderRandomised: isQuestionOrderRandomised[questionSet],
      });
    });
    try {
      await addQuizz({
        quizzTitle,
        inputPrompt: prompt,
        questionSets,
      });
      toast.success("Test adăugat");
      //dispatch(setCredentials({ ...res }));
      //navigate("/");
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };

  const addQuestionSetHandler = () => {
    console.log("setList: " + questionSetList);
    setQuestionSetList([...questionSetList, questionSetList.pop() + 1]);

    setIsNameHidden([...isNameHidden, false]);
    setIsQuestionOrderRandomised([...isQuestionOrderRandomised, false]);
  };

  const questionNameHandler = (index) => (e) => {
    if (questionSetName[index] !== undefined) {
      let newArr = [...questionSetName];
      newArr[index] = e.target.value;

      setQuestionSetName(newArr);
    } else setQuestionSetName([...questionSetName, e.target.value]);
  };

  const isNameHiddenHandler = (index) => (e) => {
    if (isNameHidden[index] !== undefined) {
      let newArr = [...isNameHidden];
      newArr[index] = e.target.checked;

      setIsNameHidden(newArr);
    } else setIsNameHidden([...isNameHidden, e.target.checked]);
  };

  const questionTypeHandler = (index) => (e) => {
    if (questionType[index] !== undefined) {
      let newArr = [...questionType];
      newArr[index] = e.target.value;

      setQuestionType(newArr);
    } else setQuestionType([...questionType, e.target.value]);
  };

  const nrOfQuestionsHandler = (index) => (e) => {
    if (nrOfQuestions[index] !== undefined) {
      let newArr = [...nrOfQuestions];
      newArr[index] = e.target.value;

      setNrOfQuestions(newArr);
    } else setNrOfQuestions([...nrOfQuestions, e.target.value]);
  };

  const isQuestionOrderRandomizedHandler = (index) => (e) => {
    if (isQuestionOrderRandomised[index] !== undefined) {
      let newArr = [...isQuestionOrderRandomised];
      newArr[index] = e.target.checked;

      setIsQuestionOrderRandomised(newArr);
    } else
      setIsQuestionOrderRandomised([
        ...isQuestionOrderRandomised,
        e.target.checked,
      ]);
  };

  return (
    <>
      <div className="HomePageWrapper">
        <Menu onLogout={logoutHandler} profileSectionData={userInfo.name} />
        <div className="HomePageContent">
          <Title>INTRODUCETI TEXT</Title>
          <MainForm
            promptHandler={promptHandler}
            questionSetList={questionSetList}
            addQuestionSetHandler={addQuestionSetHandler}
            questionNameHandler={questionNameHandler}
            isNameHiddenHandler={isNameHiddenHandler}
            questionTypeHandler={questionTypeHandler}
            nrOfQuestionsHandler={nrOfQuestionsHandler}
            isQuestionOrderRandomizedHandler={isQuestionOrderRandomizedHandler}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    </>
  );
}
export default HomePage;
