import PropTypes from "prop-types";
const Cart = ({ item,handelRemoveItem }) => {
  const { name, price, id } = item;
  return (
    <div>
      <li>
        <strong>{name}</strong>
        <span>${price}</span>
        <button onClick={()=>handelRemoveItem(id)}>Delete</button>
      </li>
    </div>
  );
};
Cart.propTypes = {
  item: PropTypes.object.isRequired,
  handelRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
