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
    <div className={`contentTheme ${isLightTheme ? "contentThemeActive" : ""}`}>
      {listTheme.map((item, index) => (
        <img
          className={`contentThemeImg ${
            item.isActive ? "contentThemeImgActive" : ""
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
