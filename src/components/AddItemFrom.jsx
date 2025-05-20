import { useState } from "react";

export default function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    const item = {
      id: Date.now(),
      name,
      completed: false,
    };

    onAddItem(item);

    setName("");
  }

  return (
    <form
      className="shopping-form border rounded p-3 mb-3"
      onSubmit={handleFormSubmit}
    >
      <div className="input-group">
        <input
          type="text"
          id="item_name"
          className="form-control"
          placeholder="Add Item"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit" className="btn btn-primary">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </form>
  );
}
