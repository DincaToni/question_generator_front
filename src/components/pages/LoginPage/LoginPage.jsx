import "./LoginPage.css";
import RoundedForm from "../../molecules/RoundedForm/RoundedForm";
import Title from "../../atoms/labels/Title/Title";
import StandardButton from "../../atoms/buttons/StandardButton/StandardButton";
import Paraghraph from "../../atoms/paragraph/Paragraph";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="LoginPageWrapper">
        <div className="LoginWrapper">
          <RoundedForm
            title={"CONECTEAZĂ-TE LA CONTUL TĂU"}
            inputs={[
              { placeholder: "Email", type: "email" },
              { placeholder: "Parola", type: "password" },
            ]}
            buttonText="Autentificare"
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
