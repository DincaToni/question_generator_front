import MenuButton from "../../atoms/buttons/MenuButton/MenuButton";
import MenuProfileSection from "../../molecules/MenuProfileSection/MenuProfileSection";
import "./Menu.css";

function Menu(props) {
  return (
    <>
      <div className="MenuWrapper">
        <MenuProfileSection />
        <MenuButton text="Acasa" />
        <MenuButton text="Profil" />
        <MenuButton text="Testele Mele" />
        <MenuButton text="Delogare" onClick={props.onLogout} />
      </div>
    </>
  );
}

export default Menu;
