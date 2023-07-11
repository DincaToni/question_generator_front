import "./Title.css";

function Title(props) {
  return (
    <>
      <h1 className={"title " + "Title-" + props.color}>{props.children}</h1>
    </>
  );
}

export default Title;
