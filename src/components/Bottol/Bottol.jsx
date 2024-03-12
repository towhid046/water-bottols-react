import PropTypes from "prop-types";
import "./Bottol.css";

const Bottol = ({ bottol, handelAddToCart }) => {
  const { name, img, price } = bottol;
  
  return (
    <div className="bottol">
      <h2>{name}</h2>
      <img src={img} alt={name} /> <br /> <br />
      <p>Price: ${price}</p>
      <button onClick={()=> handelAddToCart(bottol)}>Add to cart</button>
    </div>
  );
};

Bottol.propTypes = {
  bottol: PropTypes.object.isRequired,
  handelAddToCart: PropTypes.func.isRequired,
};

export default Bottol;
