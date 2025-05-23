export default function Item({ product }) {
  return (
    <li className="border rounded p-2 mb-1 d-flex">
      <input type="checkbox" className="form-check-input" />

      <div className="item-name">{product.name}</div>

      <i className="fs-3 bi bi-x text-danger delete-icon"></i>
    </li>
  );
}
