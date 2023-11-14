import { useState } from "react";
import Form from "./components/Form";
import Logo from "./components/Logo";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

export default function App() {
  //this state is responsible for adding newly created items to UI
  //this state is lifted up from from component
  const [items, setItems] = useState([]);

  //handler to add newly created items to UI
  const handleAddItems = function (item) {
    setItems((items) => [...items, item]);
  };

  //handler to delete items
  const handleDeleteItems = function (id) {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  //handler to toggle item checked to unchecked or vice-versa
  const handleToggleItems = function (id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleAllClear = function () {
    const confirm = window.confirm("You want to delete all items");
    if (confirm) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        item={items}
        onClear={handleAllClear}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
      />
      <Stats items={items} />
    </div>
  );
}
