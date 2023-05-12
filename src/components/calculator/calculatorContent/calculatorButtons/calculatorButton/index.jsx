import "./style.css";

const CalculatorButton = ({ onClick, isLightTheme, title, className }) => {
  return (
    <button
      className={`calculatorButton ${isLightTheme ? "active" : ""} ${
        className || ""
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default CalculatorButton;
