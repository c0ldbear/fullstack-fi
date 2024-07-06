// Time for "A more complex state, debugging React apps" 
// https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps

import { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>
        left
      </button>
      <button onClick={() => setRight(right + 1)}>
        right
      </button>
      {right}
    </div>
  )
};

export default App;
