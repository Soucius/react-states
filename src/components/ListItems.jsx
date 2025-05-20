import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItems({ items }) {
  return (
    <ul className="shopping-list list-unstyled">
      {items.length > 0 ? (
        items.map((pruduct, index) => <Item product={pruduct} key={index} />)
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
