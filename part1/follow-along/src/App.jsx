// Time for Component state, event handlers
// https://fullstackopen.com/en/part1/component_state_event_handlers 
import { useState } from 'react'


const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log("Clicked!")
  }

  console.log("rendering...", counter)

  return (
    <div>
    <button type="button" onClick={handleClick}>plus</button>
    </div>
  )
}

export default App
