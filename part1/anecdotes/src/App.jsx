import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

function App() {
  const [anecdotes, setAnecdotes] = useState({
    data: [
      { text: "If it hurts, do it more often.", points: 0 },
      { text: "Adding manpower to a late software project makes it later!", points: 0 },
      {
        text: "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
        points: 0,
      },
      {
        text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        points: 0,
      },
      { text: "Premature optimization is the root of all evil.", points: 0 },
      {
        text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
        points: 0,
      },
      {
        text: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
        points: 0,
      },
      { text: "The only way to go fast, is to go well.", points: 0 },
    ],
  });
  const [selected, setSelected] = useState(0);
  const [mostVoted, setMostVoted] = useState(0);

  const generateRandomAnecdote = () => {
    const randomAnecdoteIndex = Math.floor(Math.random() * anecdotes.data.length);
    setSelected(randomAnecdoteIndex);
  };

  const setPointsToAnecdote = () => {
    const copy = { ...anecdotes };
    copy.data[selected].points += 1;
    findMostPoints(anecdotes)
    setAnecdotes(copy);
  };

  const findMostPoints = (anecdotes) => {
    let tempPoints = 0 
    let tempIndex = 0 
    anecdotes.data.filter((item, index) => {
      tempPoints = tempPoints > item.points ? tempPoints : item.points
      tempIndex = tempPoints > item.points ? tempIndex : index
    })
    setMostVoted(tempIndex)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes.data[selected].text}</div>
      <div>has {anecdotes.data[selected].points} votes</div>
      <Button text={"vote"} onClick={setPointsToAnecdote} />
      <Button text={"next anecdote"} onClick={generateRandomAnecdote} />

      <h1>Anecdote with most votes</h1>
      <div>{anecdotes.data[mostVoted].text}</div>
      <div>has {anecdotes.data[mostVoted].points} votes</div>
    </>
  );
}

export default App;
