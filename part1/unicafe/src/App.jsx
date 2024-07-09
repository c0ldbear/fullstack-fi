import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good || neutral || bad) {
    const average = (good - bad + 0 * neutral) / (good + bad + neutral);
    const positivePercentage = (good / (good + bad + neutral)) * 100 + " %";

    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={good + bad + neutral} />
            <StatisticLine text="average" value={average} />
            <StatisticLine text="positive" value={positivePercentage} />
          </tbody>
        </table>
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
