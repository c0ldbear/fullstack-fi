// Time for "A more complex state, debugging React apps"
// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

import { useState } from "react";

const App = () => {
  // handling of a more complex state
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)


  const setClicksToZero = () => {
    setLeft(0)
    setRight(0)
  }

  const handleLeftClick = () => {
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <br />
      <button onClick={setClicksToZero}>zero</button>
    </div>
  );
};

export default App;
