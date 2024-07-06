// Time for Component state, event handlers
// https://fullstackopen.com/en/part1/component_state_event_handlers 
import { useState } from 'react'


const App = () => {
  const [ counter, setCounter ] = useState(0)

  console.log("rendering...", counter)

  return (
    <div>
    <button onClick={() => setCounter(counter + 1)}>plus</button>
    <button onClick={() => setCounter(0)}>zero</button>
    </div>
  )
}

export default App
