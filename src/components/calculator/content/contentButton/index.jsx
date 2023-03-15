import "./style.css";

const ContentButton = ({
  handelInputValues,
  equal,
  reset,
  backspace,
  handelTheme,
}) => {
  return (
    <div
      className={`contentButton ${handelTheme ? "contentButtonActive" : ""}`}
    >
      <div className="contentButtonRow">
        <button
          className={`contentButtonRowTop ${
            handelTheme ? "contentButtonRowTopActive" : ""
          }`}
          onClick={() => reset()}
        >
          AC
        </button>
        <button
          className={`contentButtonRowTop ${
            handelTheme ? "contentButtonRowTopActive" : ""
          }`}
        >
          <img className="contentCalculatorImg" src="/icon/26.png"></img>
        </button>
        <button
          className={`contentButtonRowTop ${
            handelTheme ? "contentButtonRowTopActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: "%", title: "%", type: "operator" })
          }
        >
          %
        </button>
        <button
          className={`contentButtonRowOperator ${
            handelTheme ? "contentButtonRowOperatorActive" : ""
          }`}
          onClick={() => backspace()}
        >
          ÷
        </button>
      </div>
      <div className="contentButtonRow">
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 7, title: "7", type: "number" })
          }
        >
          7
        </button>
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 8, title: "8", type: "number" })
          }
        >
          8
        </button>
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 9, title: "9", type: "number" })
          }
        >
          9
        </button>
        <button
          className={`contentButtonRowOperator ${
            handelTheme ? "contentButtonRowOperatorActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: "*", title: "*", type: "operator" })
          }
        >
          x
        </button>
      </div>
      <div className="contentButtonRow">
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 4, title: "4", type: "number" })
          }
        >
          4
        </button>
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 5, title: "5", type: "number" })
          }
        >
          5
        </button>
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 6, title: "6", type: "number" })
          }
        >
          6
        </button>
        <button
          className={`contentButtonRowOperator ${
            handelTheme ? "contentButtonRowOperatorActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: "-", title: "-", type: "operator" })
          }
        >
          -
        </button>
      </div>
      <div className="contentButtonRow">
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 1, title: "1", type: "number" })
          }
        >
          1
        </button>
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 2, title: "2", type: "number" })
          }
        >
          2
        </button>
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 3, title: "3", type: "number" })
          }
        >
          3
        </button>
        <button
          className={`contentButtonRowOperator ${
            handelTheme ? "contentButtonRowOperatorActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: "+", title: "+", type: "operator" })
          }
        >
          +
        </button>
      </div>
      <div className="contentButtonRow">
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() => backspace()}
        >
          <img
            className="contentCalculatorImg"
            src={` ${!handelTheme ? "/icon/23.png" : "/icon/24.png"}`}
          ></img>
        </button>
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: 0, title: "0", type: "number" })
          }
        >
          0
        </button>
        <button
          className={`contentButtonRowNumber ${
            handelTheme ? "contentButtonRowNumberActive" : ""
          }`}
          onClick={() =>
            handelInputValues({ value: ".", title: ".", type: "operator" })
          }
        >
          .
        </button>
        <button
          className={`contentButtonRowOperator ${
            handelTheme ? "contentButtonRowOperatorActive" : ""
          }`}
          onClick={() => equal()}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default ContentButton;
