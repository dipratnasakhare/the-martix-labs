import { useState } from "react";
import QuestionCard from "./QuestionCard";

const Booklet = () => {
  const [quetion, setQuetion] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState([]);

  const GetData = async () => {
    let api =
      "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz";
    try {
      let res = await fetch(api);
      res = await res.json();
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handelData = () => {
    GetData();
    setQuetion(true);
  };


  const CorrectAns = () => {
    setScore((e)=> e + 1)
  }








  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}

      {!quetion && (
        <div className="welcome-div">
          <h1>To begin the exam, click on the 'Start Exam' button below</h1>
          <button onClick={handelData}>Start Exam</button>
        </div>
      )}

      {quetion && (
        <div className="questions-container">
          {/* Append score and question card components here */}
          <h3>Score: {score}</h3>

          {/* correctOptionIndex */}

          {data &&
            data.map((ele, i) => {

              console.log(ele, 'ppp')
              return (
                <div>
                  <QuestionCard index={i} CorrectAns={CorrectAns} options={ele.options} question={ele.question} correctOptionIndex={ele.correctOptionIndex} />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Booklet;
