import CalculatorTheme from "./calculatorTheme";
import CalculatorButtons from "./calculatorButtons";
import CalculatorResult from "./calculatorResult";
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

      <CalculatorResult inputs={inputs} history={history} />

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
