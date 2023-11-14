// import { initialItems } from "../App";
import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  onClear,
  onDeleteItems,
  onToggleItems
}) {
  //state to sort data in UI
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = item;
  if (sortBy === "description") {
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            items={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="clear" onClick={onClear}>
          Clear List
        </button>
      </div>
    </div>
  );
}
