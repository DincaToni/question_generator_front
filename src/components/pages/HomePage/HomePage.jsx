import "./HomePage.css"

import Title from "../../atoms/labels/Title/Title";
import Menu from "../../templates/menu/Menu";
import MainForm from "../../molecules/MainForm/MainForm";

function HomePage(props) {
  return (
    <>
      <div className="HomePageWrapper">
        <Menu />
        <div className="HomePageContent">
          <Title >INTRODUCETI TEXT/FISIER</Title>
          <MainForm/>
        </div>
      </div>
    </>
  );
}
export default HomePage;
