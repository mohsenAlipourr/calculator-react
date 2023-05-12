import React from "react";
import "./style.css";

const CalculatorTheme = ({ isLightTheme, setIsLightTheme }) => {
  const listTheme = [
    {
      src: `${isLightTheme ? "/icon/LightIcon.png" : "/icon/LightIcon1.png"}`,
      onClick: () => setIsLightTheme(true),
      isActive: isLightTheme,
    },
    {
      src: `${!isLightTheme ? "/icon/OffIcon1.png" : "/icon/OffIcon.png"}`,
      onClick: () => setIsLightTheme(false),
      isActive: !isLightTheme,
    },
  ];

  return (
    <div
      className={`calculatorTheme ${
        isLightTheme ? "calculatorThemeActive" : ""
      }`}
    >
      {listTheme.map((item, index) => (
        <img
          className={`calculatorThemeImg ${
            item.isActive ? "calculatorThemeImgActive" : ""
          }`}
          src={item.src}
          onClick={item.onClick}
          key={index}
        />
      ))}
    </div>
  );
};

export default CalculatorTheme;
