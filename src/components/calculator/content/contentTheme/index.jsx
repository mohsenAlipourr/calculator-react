import "./style.css";

const ContentTheme = ({ handelItem, handelTheme }) => {
  return (
    <div className={`contentTheme ${handelTheme ? "contentThemeActive" : ""}`}>
      <img
        className={`contentThemeImg ${
          handelTheme ? "contentThemeImgActive" : ""
        }`}
        src={` ${handelTheme ? "/icon/1.png" : "/icon/11.png"}`}
        onClick={() => handelItem(true)}
      ></img>
      <img
        className={`contentThemeImg ${
          !handelTheme ? "contentThemeImgActive" : ""
        }`}
        src={` ${!handelTheme ? "/icon/22.png" : "/icon/2.png"}`}
        onClick={() => handelItem(false)}
      ></img>
    </div>
  );
};

export default ContentTheme;
