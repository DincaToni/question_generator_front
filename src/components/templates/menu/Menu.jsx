import MenuButton from "../../atoms/buttons/MenuButton/MenuButton";
import MenuProfileSection from "../../molecules/MenuProfileSection/MenuProfileSection";
import "./Menu.css";
import { useNavigate } from "react-router-dom";

function Menu(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className="MenuWrapper">
        <MenuProfileSection profileSectionData={props.profileSectionData} />
        <MenuButton
          text="Acasa"
          onClick={() => {
            navigate("/");
          }}
        />
        <MenuButton
          text="Profil"
          onClick={() => {
            navigate("/userProfile");
          }}
        />
        <MenuButton
          text="Testele Mele"
          onClick={() => {
            navigate("/myQuizzes");
          }}
        />
        <MenuButton text="Delogare" onClick={props.onLogout} />
      </div>
    </>
  );
}

export default Menu;
