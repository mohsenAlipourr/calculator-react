import { useState } from "react";
import CalculatorContent from "./calculatorContent";
import { cloneVariable } from "../../utils";
import "./style.css";

const Calculator = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);
  const [inputs, setInputs] = useState([]);
  const [history, setHistory] = useState("");
  const isLastInputNumber = inputs.length && inputs.at(-1).type === "number";

  const handelValidationValue = (value) => {
    const isValueFirstOperator = !inputs.length && value.type === "operator";

    const isValueDuplicateOperator =
      inputs.length &&
      value.type === "operator" &&
      inputs.at(-1).type === "operator";

    if (isValueFirstOperator || isValueDuplicateOperator) {
      return alert("enter number");
    }

    addValueToInputs(value);
  };

  const addValueToInputs = (input) => {
    const isValueNumber = input.type === "number";

    if (!isValueNumber || !isLastInputNumber) {
      setInputs((prev) => {
        return [...prev, input];
      });
      return;
    }

    /* inputs.at(-1) value number paste input*/
    const clonedInputs = cloneVariable(inputs);
    const lastItemInputs = clonedInputs.at(-1);

    lastItemInputs.title += input.title;
    lastItemInputs.value = Number(`${lastItemInputs.value}${input.value}`);

    setInputs(clonedInputs);
  };

  const equal = () => {
    if (!isLastInputNumber) return;

    let prevValue = 0;
    let operator = "+";
    let historyUpdated = "";

    inputs.forEach((item) => {
      historyUpdated = historyUpdated + item.title;

      if (item.type === "number") {
        prevValue = computing(prevValue, item.value, operator);
        return;
      }

      if (item.type === "operator") {
        operator = item.value;
        return;
      }
    });

    setHistory(historyUpdated);

    setInputs([{ value: prevValue, title: `${prevValue}`, type: "number" }]);
  };

  const computing = (firstValue, secondValue, operator) => {
    if (operator === "+") return firstValue + secondValue;

    if (operator === "-") return firstValue - secondValue;

    if (operator === "*") return firstValue * secondValue;

    if (operator === "/") return firstValue / secondValue;

    if (operator === "%") return firstValue % secondValue;
  };

  const backspace = () => {
    const lastItemInputs = isLastInputNumber && inputs.at(-1).title.length > 1;

    if (!lastItemInputs) {
      setInputs(inputs.slice(0, inputs.length - 1));
      return;
    }

    const clonedList = cloneVariable(inputs);
    clonedList.at(-1).title = clonedList.at(-1).title.slice(0, -1);

    clonedList.at(-1).value = Number(`${clonedList.at(-1).value}`.slice(0, -2));

    setInputs(clonedList);
  };

  const reset = () => {
    setHistory("");
    setInputs([]);
  };

  return (
    <div className="calculatorContainer">
      <CalculatorContent
        history={history}
        inputs={inputs}
        isLightTheme={isLightTheme}
        handelValidationValue={handelValidationValue}
        reset={reset}
        backspace={backspace}
        equal={equal}
        setIsLightTheme={setIsLightTheme}
      />
    </div>
  );
};

export default Calculator;
