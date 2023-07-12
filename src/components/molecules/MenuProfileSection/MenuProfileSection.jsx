import MenuProfileImage from "../../atoms/images/MenuProfileImage/MenuProfileImage";
import TextLabel from "../../atoms/labels/TextLabel/TextLabel";
import "./MenuProfileSection.css";

function MenuProfileSection(props) {
  return (
    <>
      <div className="MenuProfileSectionWrapper">
        <div className="CircleBorder">
          <MenuProfileImage source="https://reactjs.org/logo-og.png" />
          <TextLabel color="white">{props.profileSectionData}</TextLabel>
        </div>
      </div>
    </>
  );
}

export default MenuProfileSection;
