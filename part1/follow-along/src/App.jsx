// Time for Component state, event handlers
// https://fullstackopen.com/en/part1/component_state_event_handlers 
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}! You are {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = (props) => {
  const {counter} = props
  return (
    <div>
      {counter}
    </div>
  )
}

export default App
