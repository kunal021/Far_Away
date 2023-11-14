export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items in your packing list 🚀</em>
      </p>
    );
  }
  const itemsLength = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const itemsPackedRatio = Math.round((itemsPacked / itemsLength) * 100);
  return (
    <footer className="stats">
      <em>
        {itemsPackedRatio !== 100
          ? `💼 You have ${itemsLength} item on your list, and you have already packed${" "}
        ${itemsPacked} (${itemsPacked !== 0 ? itemsPackedRatio : 0}%)`
          : `You got everything! Ready to go ✈️`}
      </em>
    </footer>
  );
}
