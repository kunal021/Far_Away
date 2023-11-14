import { useState } from "react";

export default function Form({ onAddItems }) {
  //state to add description by taking vale from input field
  const [description, setDescription] = useState("");
  //state to set quantity we select in options field
  const [quantity, setQuantity] = useState(1);

  //handler to create new items
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;

    const newItem = { quantity, description, packed: false, id: Date.now() };

    //function to add created items in UI
    /* here UI is updated in PackingList component so we 
    are lifting up state(child to parent communication) to 
    common parent of both Form and PackingList component that is App component */
    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🤩 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* creating array of num 1-20 and mapping into a llist */}
        {Array.from({ length: 20 }, (curr, idx) => idx + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <div>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
}
