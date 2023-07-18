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
  const [wasRemoved, setWasRemoved] = useState(false);
  const [diff, setDiff] = useState(1);
  const [prompt, setPrompt] = useState("");
  const [questionSetName, setQuestionSetName] = useState([]);
  const [isNameHidden, setIsNameHidden] = useState([false]);
  const [questionType, setQuestionType] = useState([]);
  const [nrOfQuestions, setNrOfQuestions] = useState([]);
  const [isQuestionOrderRandomised, setIsQuestionOrderRandomised] = useState([
    false,
  ]);
  const [questionSetList, setQuestionSetList] = useState([0]);
  const quizzTitle = "Test";

  useEffect(() => {
    if (!wasRemoved) {
      setQuestionSetName([
        ...questionSetName,
        `Set întrebări ${questionSetList[questionSetList.length - 1] + diff}`,
      ]);
    }
  }, [questionSetList]);

  useEffect(() => {
    console.log("qsl: " + questionSetList);
    console.log("qsn: " + questionSetName);
    console.log("nh: " + isNameHidden);
    console.log("qt: " + questionType);
    console.log("nr: " + nrOfQuestions);
    console.log("or: " + isQuestionOrderRandomised);
  }, [
    questionSetList,
    questionSetName,
    isNameHidden,
    questionType,
    nrOfQuestions,
    isQuestionOrderRandomised,
  ]);

  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  const user = userInfo._id;

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
      await addQuizz({ user, quizzTitle, inputPrompt: prompt, questionSets });
      toast.success("Test adăugat");
      //dispatch(setCredentials({ ...res }));
      //navigate("/");
    } catch (err) {
      console.log(err?.data?.message || err.error);
      toast.error(err?.data?.message || err.error);
    }
  };

  const deleteQuestionSetHandler = (index) => (e) => {
    console.log("i:" + index);
    let tempQuestionSetList = [...questionSetList];
    tempQuestionSetList.splice(index, 1);
    tempQuestionSetList = tempQuestionSetList.map((ind) =>
      ind > index ? ind - 1 : ind
    );
    setDiff(diff + 1);
    setWasRemoved(true);
    setQuestionSetList([...tempQuestionSetList]);

    const tempQuestionSetName = [...questionSetName];
    tempQuestionSetName.splice(index, 1);
    setQuestionSetName([...tempQuestionSetName]);

    const tempIsNameHidden = [...isNameHidden];
    tempIsNameHidden.splice(index, 1);
    setIsNameHidden([...tempIsNameHidden]);

    const tempQuestionType = [...questionType];
    tempQuestionType.splice(index, 1);
    setQuestionType([...tempQuestionType]);

    const tempNrOfQuestions = [...nrOfQuestions];
    tempNrOfQuestions.splice(index, 1);
    setNrOfQuestions([...tempNrOfQuestions]);

    const tempIsQuestionOrderRandomised = [...isQuestionOrderRandomised];
    tempIsQuestionOrderRandomised.splice(index, 1);
    setIsQuestionOrderRandomised([...tempIsQuestionOrderRandomised]);
  };

  const addQuestionSetHandler = () => {
    setWasRemoved(false);
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
            nameValue={questionSetName}
            questionNameHandler={questionNameHandler}
            isNameHiddenHandler={isNameHiddenHandler}
            questionType={questionType}
            questionTypeHandler={questionTypeHandler}
            nrOfQuestions={nrOfQuestions}
            nrOfQuestionsHandler={nrOfQuestionsHandler}
            isQuestionOrderRandomizedHandler={isQuestionOrderRandomizedHandler}
            deleteQuestionSetHandler={deleteQuestionSetHandler}
            submitHandler={submitHandler}
          />
        </div>
      </div>
    </>
  );
}
export default HomePage;
