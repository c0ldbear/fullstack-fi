// Time for "A more complex state, debugging React apps"
// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

import { useState } from "react";

// Conditional rendering! :D
const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(" ")}
    </div>
  )
}

const App = () => {
  // handling of a more complex state
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [total, setTotal] = useState(0)
  const [allClicks, setAll] = useState([])

  const setClicksToZero = () => {
    setLeft(0)
    setRight(0)
    setTotal(0)
    setAll([])
  }

  const handleLeftClick = () => {
    const updatedLeft = left + 1
    setLeft(updatedLeft)
    console.log(">> left before:", left)
    setTotal(updatedLeft + right)
    console.log(">> left after:", left)
    setAll(allClicks.concat("L"))
  }

  const handleRightClick = () => {
    const updatedRight = right + 1
    setRight(updatedRight)
    setTotal(left + updatedRight)
    setAll(allClicks.concat("R"))
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <br />
      <button onClick={setClicksToZero}>zero</button>
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
