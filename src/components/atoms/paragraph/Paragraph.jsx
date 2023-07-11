import "./Paragraph.css";

const Paragraph = (props) => {
  return (
    <div>
      <p
        className={
          "Paragraph Paragraph-" +
          props.color +
          " Paragraph-align-" +
          props.align
        }
      >
        {props.children}
      </p>
    </div>
  );
};

export default Paragraph;
