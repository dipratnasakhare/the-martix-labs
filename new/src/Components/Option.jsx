import { useState } from "react";

const Btnfunction = ({ Btn, HandeClick, index, text }) => {
  return (
    <button
      disabled={Btn}
      className="disable"
      onClick={() => HandeClick(index)}
    >
      {text}
    </button>
  );
};

const Option = ({ text, correctOptionIndex, CorrectAns, index }) => {
  const [bg, setBg] = useState({});
  const [Btn, setBtn] = useState(false);

  const HandeClick = (index) => {
    if (index == correctOptionIndex) {
      CorrectAns();
      setBg({ backgroundColor: "green" });
    } else {
      setBg({ backgroundColor: "red" });
    }
    setBtn(true);
  };

  return (
    <div style={bg} data-testid="option" key={index / Math.random()}>
      {/* create a button here */}

      <Btnfunction text={text} HandeClick={HandeClick} index={index} />
    </div>
  );
};

export default Option;
