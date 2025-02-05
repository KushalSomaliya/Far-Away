import { useState } from "react";

import Item from "./Item.js";

export default function PackingList({
  items,
  onDeleteItem,
  onTogglePackedItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    // const unpackedItems = items.filter((item) => !item.packed);
    // const packedItems = items.filter((item) => item.packed);
    // sortedItems = [...unpackedItems, ...packedItems];
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onTogglePackedItem={onTogglePackedItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        {Boolean(items.length) && (
          <button onClick={onClearList}>Clear List</button>
        )}
      </div>
    </div>
  );
}
