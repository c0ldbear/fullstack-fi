function Item({ name, isPacked }) {
  if (isPacked) {
    return <li className="item">{name} ✔</li>;
  }

  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item isPacked={false} name="space suit" />
        <Item isPacked={true} name="helmet with a golden leaf" />
        <Item isPacked={false} name="photo of tam" />
      </ul>
    </section>
  );
}
