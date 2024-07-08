import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const DisplayFeedback = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};


const DisplayAverage = ({goodValue, badValue, neutralValue}) => {
  const average = (goodValue - badValue + 0*neutralValue) / (goodValue + badValue + neutralValue)
  return (
    <div>
      average {average}
    </div>
  )
}

const PositiveRate = ({goodValue, badValue, neutralValue}) => {
  const positivePercentage = goodValue / (goodValue +badValue + neutralValue) * 100
  return (
    <div>
      positive {positivePercentage}%
    </div>
  )
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodFeedback = () => {
    console.log("good!");
    setGood(good + 1);
  };

  const setNeutralFeedback = () => {
    console.log("neutral!");
    setNeutral(neutral + 1);
  };

  const setBadFeedback = () => {
    console.log("bad!");
    setBad(bad + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button text={"good"} onClick={setGoodFeedback} />
      <Button text={"neutral"} onClick={setNeutralFeedback} />
      <Button text={"bad"} onClick={setBadFeedback} />

      <h1>statistics</h1>
      <DisplayFeedback text="good" value={good} />
      <DisplayFeedback text="neutral" value={neutral} />
      <DisplayFeedback text="bad" value={bad} />
      <DisplayFeedback text="all" value={good+bad+neutral} />
      <DisplayAverage goodValue={good} badValue={bad} neutralValue={neutral} />
      <PositiveRate goodValue={good} badValue={bad} neutralValue={neutral} />
    </>
  );
}

export default App;
