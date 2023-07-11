import "./RegisterPage.css";
import RoundedForm from "../../molecules/RoundedForm/RoundedForm";
import Title from "../../atoms/labels/Title/Title";
import StandardButton from "../../atoms/buttons/StandardButton/StandardButton";
import Paraghraph from "../../atoms/paragraph/Paragraph";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <>
      <div className="LoginPageWrapper">
        <div className="RegisterOptionWrapper">
          <div className="RegistrationOperationField">
            <div className="RegistrationOperationField-Title">
              <Title color="white">AI DEJA CONT?</Title>
            </div>
            <Paraghraph color="white" align="center">
              Autentifică-te pentru a avea acces la testele tale și pentru a
              genera unele noi printr-un singur click.
            </Paraghraph>
            <div className="RegistrationOperationField-Button">
              <Link to="../login">
                <StandardButton size="medium" edge="round" colorScheme="white">
                  Autentificare
                </StandardButton>
              </Link>
            </div>
          </div>
        </div>
        <div className="LoginWrapper">
          <RoundedForm
            title={"CREEAZĂ-ȚI CONTUL"}
            inputs={[
              { placeholder: "Nume", type: "text" },
              { placeholder: "Email", type: "email" },
              { placeholder: "Parola", type: "password" },
              { placeholder: "Reintroduceți parola", type: "password" },
            ]}
            buttonText="Înregistrare"
          ></RoundedForm>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
