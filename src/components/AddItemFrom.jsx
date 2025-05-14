export default function AddItemForm() {
  return (
    <form className="shopping-form border rounded p-3 mb-3">
      <div className="input-group">
        <input
          type="text"
          id="item_name"
          className="form-control"
          placeholder="Add Item"
        />

        <button type="submit" className="btn btn-primary">
          <i className="bi bi-plus"></i>
        </button>
      </div>
    </form>
  );
}
