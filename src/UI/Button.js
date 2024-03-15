import "./button.css";

const Button = (props) => {
  return <span className="btn">{props.children}</span>;
};

export default Button;
