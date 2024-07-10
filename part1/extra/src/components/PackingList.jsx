import { useState } from "react";

function Item({ name }) {
  const [isPacked, setIsPacked] = useState(false);

  return (
    <li
      className="item"
      onClick={() => {
        setIsPacked(!isPacked);
        console.log("Clicked " + name);
      }}
    >
      {name} {isPacked && "✔"}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item name="space suit" />
        <Item name="helmet with a golden leaf" />
        <Item name="photo of tam" />
      </ul>
    </section>
  );
}
