import "./HomePage.css";

import Title from "../../atoms/labels/Title/Title";
import Menu from "../../templates/menu/Menu";
import MainForm from "../../molecules/MainForm/MainForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../../slices/authSlice";
import { useLogoutMutation } from "../../../slices/userApiSlice";
import { logout } from "../../../slices/authSlice";
import { useAddQuizzMutation } from "../../../slices/quizzApiSlice";
import { toast } from "react-toastify";

function HomePage(props) {
  const [prompt, setPrompt] = useState("");
  const [questionSets, setQuestionSets] = useState([]);
  const quizzTitle = "Quizz";

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
    try {
      const res = await addQuizz({ quizzTitle, prompt, questionSets }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  return (
    <>
      <div className="HomePageWrapper">
        <Menu onLogout={logoutHandler} profileSectionData={userInfo.name} />
        <div className="HomePageContent">
          <Title>INTRODUCETI TEXT</Title>
          <MainForm promptHandler={promptHandler} />
        </div>
      </div>
    </>
  );
}
export default HomePage;
