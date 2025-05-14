import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItems({ products }) {
  return (
    <ul className="shopping-list list-unstyled">
      {products.length > 0 ? (
        products.map((pruduct, index) => <Item product={pruduct} key={index} />)
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
