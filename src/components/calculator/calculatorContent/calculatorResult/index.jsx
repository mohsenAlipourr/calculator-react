import "./style.css";

const CalculatorResult = ({ inputs, history }) => {
  return (
    <>
      <p className="calculatorResultHistory">{history}</p>

      <p className="calculatorResult">{inputs.map((item) => item.title)}</p>
    </>
  );
};

export default CalculatorResult;
