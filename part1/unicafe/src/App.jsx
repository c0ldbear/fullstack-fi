import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const DisplayFeedback = ({text, value}) => {
  return <div>{text} {value}</div>
}

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const temp = (text) => () => {
    console.log(text)
  }

  const setGoodFeedback = () => {
    console.log("good!")
    setGood(good + 1)
  }

  const setNeutralFeedback = () => {
    console.log("neutral!")
    setGood(neutral + 1)
  }

  const setBadFeedback = () => {
    console.log("bad!")
    setGood(bad + 1)
  }

  return (
    <>
      <h1>give feedback</h1>

      <Button text={"good"} onClick={setGoodFeedback} />
      <button onClick={temp("neutral")}>neutral</button>
      <button onClick={temp("bad")}>bad</button>

      <h1>statistics</h1>
      <DisplayFeedback text="good" value={good} />
      <div>neutral</div>
      <div>bad</div>
    </>
  );
}

export default App;
