// Time for Component state, event handlers
// https://fullstackopen.com/en/part1/component_state_event_handlers 
import { useState } from 'react'


const App = () => {
  const [ counter, setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  console.log("rendering...", counter)

  return (
    <div>
    <button onClick={increaseByOne}>plus</button>
    <button onClick={setToZero}>zero</button>
    </div>
  )
}

export default App
