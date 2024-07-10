function Item({ name, isPacked }) {
    return (<li className="item">
        {name} {isPacked && '✔'}
    </li>)
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={true} name="space suit" />
        <Item isPacked={true} name="helmet with a golden leaf" />
        <Item isPacked={false} name="photo of tam" />
      </ul>
    </section>
  );
}
