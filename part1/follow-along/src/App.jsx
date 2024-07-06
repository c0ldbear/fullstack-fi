// Time for "A more complex state, debugging React apps"
// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

import { useState } from "react";

const App = () => {
  // handling of a more complex state
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => setClicks({ ...clicks, left: clicks.left + 1 });

  const handleRightClick = () => {
    const newClicks = {
      ...clicks,
      right: clicks.right + 1,
    };
    setClicks(newClicks); 
  };

  // in react, it is forbidden to mutate the state directly!
  // Forbidden:
  const handleLeftClickForbidden = () => {
    clicks.left++
    setClicks(clicks)
  }

  const setClicksToZero = () => setClicks({left: 0, right: 0})

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClickForbidden}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <br />
      <button onClick={setClicksToZero}>zero</button>
    </div>
  );
};

export default App;
