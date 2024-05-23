const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}

const Hello = (props) => {
  console.log(">>", props)
  return (
    <div>
      <p>Hello {props.name}! You are {props.age} years old.</p>
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
      <p>{friends[0].name} {friends[0].age}</p>
      <p>{friends[1].name} {friends[1].age}</p>
      <p>{otherFriends}</p>
    </div>
  )
}

export default App
