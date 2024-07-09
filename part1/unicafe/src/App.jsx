import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  );
};

const DisplayAverage = ({ goodValue, badValue, neutralValue }) => {
  const average = (goodValue - badValue + 0 * neutralValue) / (goodValue + badValue + neutralValue);
  return <div>average {average}</div>;
};

const PositiveRate = ({ goodValue, badValue, neutralValue }) => {
  const positivePercentage = (goodValue / (goodValue + badValue + neutralValue)) * 100;
  return <div>positive {positivePercentage} %</div>;
};

const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral || bad) {
    return (
      <>
        <h1>statistics</h1>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={good + bad + neutral} />
        <DisplayAverage goodValue={good} badValue={bad} neutralValue={neutral} />
        <PositiveRate goodValue={good} badValue={bad} neutralValue={neutral} />
      </>
    );
  }

  return (
    <>
      <h1>statistics</h1>
      <div>No feedback given</div>
    </>
  );
};

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

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
