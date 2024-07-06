// Time for Component state, event handlers
// https://fullstackopen.com/en/part1/component_state_event_handlers 
const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const Hello = (props) => {
  const {name, age} = props
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}! You are {age} years old.</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const friends = [
    {name: "Peter", age: 4},
    {name: "Maya", age: 10}
  ]
  const otherFriends = ["Pelle", "Maria"]

  return (
    <div>
      <h1>Greetings!</h1>
      <Hello name={friends[0].name} age={friends[0].age} />
      <Hello name={friends[1].name} age={friends[1].age} />
      <br />
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{otherFriends}</p>
    </div>
  )
}

export default App
