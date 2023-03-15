import { useState } from "react";
import ContentTheme from "../contentTheme";
import ContentButton from "../contentButton";
import "./style.css";

const ContentHeader = ({ handelTheme, handelItem }) => {
  const [inputValues, setInputValues] = useState([]);
  const [history, setHistory] = useState("");

  const handelInputValues = (newValue) => {
    if (
      newValue.type !== "operator" ||
      inputValues.at(-1).type !== "operator"
    ) {
      if (
        inputValues.length !== 0 &&
        newValue.type === "number" &&
        inputValues.at(-1).type === "number"
      ) {
        const cloneInputValues = JSON.parse(JSON.stringify(inputValues));

        cloneInputValues.at(-1).title =
          cloneInputValues.at(-1).title + newValue.title;
        cloneInputValues.at(-1).value = Number(
          `${cloneInputValues.at(-1).value}${newValue.value}`
        );

        setInputValues(cloneInputValues);
      } else {
        setInputValues((prev) => {
          return [...prev, newValue];
        });
      }
    } else alert("عدد وارد کنید");
  };

  const equal = () => {
    if (inputValues.length !== 0 && inputValues.at(-1).type === "number") {
      let prevValue = 0;
      let operator = "+";

      inputValues.forEach((item) => {
        if (item.type === "number") {
          prevValue = computing(prevValue, item.value, operator);
        } else if (item.type === "operator") {
          operator = item.value;
        }
      });

      let memoir = "";

      inputValues.map((item) => {
        memoir = memoir + item.title;
        console.log("memoir", memoir);
      });

      setHistory(memoir);
      setInputValues([
        { value: prevValue, title: `${prevValue}`, type: "number" },
      ]);
    }
  };

  const computing = (firstValue, secondValue, operator) => {
    if (operator === "+") return firstValue + secondValue;
    if (operator === "-") return firstValue - secondValue;
    if (operator === "*") return firstValue * secondValue;
    if (operator === "/") return firstValue / secondValue;
    if (operator === "%") return firstValue % secondValue;
  };

  const backspace = () => {
    if (
      inputValues.length !== 0 &&
      inputValues.at(-1).type === "number" &&
      inputValues.at(-1).title.length >= 1
    ) {
      const cloneInputValues = JSON.parse(JSON.stringify(inputValues));
      cloneInputValues.at(-1).title = cloneInputValues
        .at(-1)
        .title.slice(0, -1);
      cloneInputValues.at(-1).value = Number(
        `${cloneInputValues.at(-1).value}`.slice(1, -1)
      );

      setInputValues(cloneInputValues);
    } else {
      setInputValues(inputValues.slice(-0, inputValues.length - 1));
    }
  };

  const reset = () => {
    setInputValues([(inputValues.length = 0)]);
    setHistory("");
  };

  return (
    <>
      <ContentTheme handelItem={handelItem} handelTheme={handelTheme} />

      <div className="contentHeader">
        <p
          className={`contentHeaderHistory ${
            handelTheme ? "contentHeaderActive" : ""
          }`}
        >
          {history}
        </p>

        <p
          className={`contentHeaderResult ${
            handelTheme ? "contentHeaderActive" : ""
          }`}
        >
          {inputValues.map((item, index) => item.title)}
        </p>
      </div>

      <ContentButton
        handelTheme={handelTheme}
        handelInputValues={handelInputValues}
        equal={equal}
        backspace={backspace}
        reset={reset}
      />
    </>
  );
};

export default ContentHeader;
