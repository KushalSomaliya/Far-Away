export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );
  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedItemsPer = Math.round((packedItems / totalItems) * 100);

  return (
    <footer className="stats">
      {packedItemsPer === 100 ? (
        <em>You got everything! Ready to go ✈️</em>
      ) : (
        <>
          💼
          <em>
            {" "}
            You have {totalItems} items on your list, and you{" "}
            {!packedItems
              ? "haven't started packing yet"
              : `already packed ${packedItems}(${packedItemsPer || 0}%)`}
          </em>
        </>
      )}
    </footer>
  );
}
