import { useState, useEffect } from "react";
import Bottol from "./../Bottol/Bottol";
import "./Bottols.css";
import Cart from "../Cart/Cart";
import { addToLS, getItemFromLS, removeItemFromLS } from "../../utilities/localStorage";

const Bottols = () => {
  const [bottols, setBottols] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("products.json");
      const data = await res.json();
      setBottols(data);
    };
    loadData();
  }, []);

  useEffect(() => {
    if (bottols.length > 0) {
      let newItems = [];
      const addedCartIds = getItemFromLS();
      addedCartIds.map((id) =>
        bottols.map((bottol) => {
          if (bottol.id === id) {
            newItems.push(bottol);
          }
        })
      );
      setCartItems(newItems);
    }
  }, [bottols]);

  const handelAddToCart = (bottol) => {
    const existedItem = cartItems.find((item) => item.id === bottol.id);
    existedItem;
    if (existedItem) {
      alert("Item already added");
    } else {
      setCartItems([...cartItems, bottol]);
      addToLS(bottol.id);
    }
  };

  const handelRemoveItem = (id) => {
    // remove from ui:
    const reminingItems = cartItems.filter(item=> item.id !== id);
    setCartItems(reminingItems);

    // remove from lS:
    removeItemFromLS(id);
  }

  return (
    <div>
      <h2>Cart: {cartItems.length}</h2>
      <div>
        {cartItems.map((item) => (
          <Cart 
          key={item.id} 
          item={item}
          handelRemoveItem={handelRemoveItem}
          />
        ))}
      </div>

      <h2>All Bottols: {bottols.length}</h2>
      <div className="bottol-container">
        {bottols.map((bottol) => (
          <Bottol
            key={bottol.id}
            bottol={bottol}
            handelAddToCart={handelAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Bottols;
