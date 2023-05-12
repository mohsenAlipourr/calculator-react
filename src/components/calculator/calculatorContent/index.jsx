import CalculatorTheme from "./calculatorTheme";
import CalculatorButtons from "./calculatorButtons";
import "./style.css";

const CalculatorContent = ({
  history,
  reset,
  backspace,
  handelValidationValue,
  equal,
  inputs,
  isLightTheme,
  setIsLightTheme,
}) => {
  return (
    <div className={`calculator ${isLightTheme ? "calculatorActive" : ""}`}>
      <CalculatorTheme
        isLightTheme={isLightTheme}
        setIsLightTheme={setIsLightTheme}
      />

      <div className="calculatorContent">
        <p className="contentContentHistory">{history}</p>

        <p className="contentContentResult">
          {inputs.map((item) => item.title)}
        </p>
      </div>

      <CalculatorButtons
        isLightTheme={isLightTheme}
        handelButtonValues={handelValidationValue}
        equal={equal}
        backspace={backspace}
        reset={reset}
      />
    </div>
  );
};

export default CalculatorContent;
