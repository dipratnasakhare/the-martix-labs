import { useState } from "react";
import Option from "./Option";

const QuestionCard = ({
  question,
  options,
  CorrectAns,
  correctOptionIndex,
  index
}) => {
  const [Ans, setAns] = useState(true);

  const HandelShowAns = () => {
    setAns(!Ans);
  };

  return (
    <div className="question-card" key={index / Math.random()}>
      {/* add question here */}
      <h3>{question}</h3>

      <div className="options">
        {options &&
          options.map((ele, i) => (
            <Option
              index={i}
              correctOptionIndex={correctOptionIndex}
              CorrectAns={CorrectAns}
              text={ele}
            />
          ))}
      </div>

      {Ans ? (
        <div className="show-ans" onClick={HandelShowAns}>
          show ans
        </div>
      ) : (
        <div className="hide-ans" onClick={HandelShowAns}>
          Hide ans
        </div>
      )}

      {!Ans && <p>{options[correctOptionIndex]}</p>}
    </div>
  );
};

export default QuestionCard;
