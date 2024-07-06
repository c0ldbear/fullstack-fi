// Time for Component state, event handlers
// https://fullstackopen.com/en/part1/component_state_event_handlers 
import { useState } from 'react'


const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  console.log("rendering...", counter)

  return (
    <div>
      {counter}
    </div>
  )
}

export default App
