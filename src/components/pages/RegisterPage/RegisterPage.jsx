import "./RegisterPage.css";
import RoundedForm from "../../molecules/RoundedForm/RoundedForm";
import Title from "../../atoms/labels/Title/Title";
import StandardButton from "../../atoms/buttons/StandardButton/StandardButton";
import Paraghraph from "../../atoms/paragraph/Paragraph";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRegisterMutation } from "../../../slices/userApiSlice";
import { setCredentials } from "../../../slices/authSlice";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmedPassword) {
      toast.error("Parolele introduse nu corespund");
    } else
      try {
        const res = await register({ name, email, password }).unwrap();
        dispatch(setCredentials({ ...res }));
        navigate("/");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
  };

  return (
    <>
      <div className="RegisterPageWrapper">
        <div className="LoginOptionWrapper">
          <div className="LoginOperationField">
            <div className="LoginOperationField-Title">
              <Title color="white">AI DEJA CONT?</Title>
            </div>
            <Paraghraph color="white" align="center">
              Autentifică-te pentru a avea acces la testele tale și pentru a
              genera unele noi printr-un singur click.
            </Paraghraph>
            <div className="LoginOperationField-Button">
              <Link to="../login">
                <StandardButton size="medium" edge="round" colorScheme="white">
                  Autentificare
                </StandardButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="RegisterWrapper">
          <RoundedForm
            title={"CREEAZĂ-ȚI CONTUL"}
            inputs={[
              {
                placeholder: "Nume",
                type: "text",
                onChange: (e) => {
                  setName(e.target.value);
                },
              },
              {
                placeholder: "Email",
                type: "email",
                onChange: (e) => {
                  setEmail(e.target.value);
                },
              },
              {
                placeholder: "Parola",
                type: "password",
                onChange: (e) => {
                  setPassword(e.target.value);
                },
              },
              {
                placeholder: "Reintroduceți parola",
                type: "password",
                onChange: (e) => {
                  setConfirmedPassword(e.target.value);
                },
              },
            ]}
            buttonText="Înregistrare"
            onSubmit={submitHandler}
          ></RoundedForm>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
