import { useState } from "react";
import ContentHeader from "./content/contentHeader";
import "./style.css";

const Calculator = () => {
  const [handelTheme, setHandelTheme] = useState(false);

  const handelItem = (status) => {
    setHandelTheme(status);
  };

  return (
    <div className={`calculator ${handelTheme ? "calculatorActive" : ""}`}>
      <ContentHeader
        handelTheme={handelTheme}
        setHandelTheme={setHandelTheme}
        handelItem={handelItem}
      />
    </div>
  );
};

export default Calculator;
