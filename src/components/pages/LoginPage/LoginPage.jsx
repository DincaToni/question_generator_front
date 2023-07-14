import "./LoginPage.css";
import RoundedForm from "../../molecules/RoundedForm/RoundedForm";
import Title from "../../atoms/labels/Title/Title";
import StandardButton from "../../atoms/buttons/StandardButton/StandardButton";
import Paraghraph from "../../atoms/paragraph/Paragraph";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../../slices/userApiSlice";
import { setCredentials } from "../../../slices/authSlice";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHnadler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();

      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <div className="LoginPageWrapper">
        <div className="LoginWrapper">
          <RoundedForm
            title={"CONECTEAZĂ-TE LA CONTUL TĂU"}
            inputs={[
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
            ]}
            buttonText="Autentificare"
            onSubmit={submitHnadler}
          ></RoundedForm>
        </div>
        <div className="RegisterOptionWrapper">
          <div className="RegistrationOperationField">
            <div className="RegistrationOperationField-Title">
              <Title color="white">NU AI CONT?</Title>
            </div>
            <Paraghraph color="white" align="center">
              Înregistreză-te pentru a genera printr-un singur click teste
              pentru tine și studenții tăi.
            </Paraghraph>
            <div className="RegistrationOperationField-Button">
              <Link to="/register">
                <StandardButton size="medium" edge="round" colorScheme="white">
                  Înregistrare
                </StandardButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
