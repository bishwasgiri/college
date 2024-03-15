import "./content-header.css";

const ContentHeader = (props) => {
  return (
    <div className="content-header">
      {/* <div className="heading">{props.heading}</div> */}
      <h1>{props.heading}</h1>
      <div className="line-design"></div>
    </div>
  );
};

export default ContentHeader;
