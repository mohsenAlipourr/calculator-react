import CalculatorButton from "./calculatorButton";
import { getButtons } from "./staticData";
import "./style.css";

const ContentButtons = ({
  handelButtonValues,
  equal,
  reset,
  backspace,
  isLightTheme,
}) => {
  const buttons = getButtons(
    handelButtonValues,
    equal,
    reset,
    backspace,
    isLightTheme
  );

  return (
    <div
      className={`contentButton ${isLightTheme ? "contentButtonActive" : ""}`}
    >
      {buttons.map((item) => (
        <CalculatorButton
          onClick={item.onClick}
          isLightTheme={isLightTheme}
          title={item.title}
          className={item.className}
        />
      ))}
    </div>
  );
};

export default ContentButtons;
