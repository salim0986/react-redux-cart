import React from "react";
import { shoppingData } from "./Home";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, tax, shipping, total, subTotal } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  function increment(id) {
    dispatch({
      type: "increment",
      payload: id,
    });
  }
  function decrement(id) {
    dispatch({
      type: "decrement",
      payload: id,
    });
  }
  function handleDelete(id) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }
  return (
    <section className="cart">
      <div className="cartItems">
        {cartItems.length > 0 ? (
          cartItems.map(({ id, qty, name, price, imgSrc }) => (
            <CartItem
              key={id}
              id={id}
              name={name}
              imgSrc={imgSrc}
              price={price}
              qty={qty}
              increment={increment}
              decrement={decrement}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h3>No Items In Cart</h3>
        )}
      </div>
      <div className="cartMath">
        <p>SubTotal: ${subTotal}</p>
        <p>Shipping: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h3>Total: ${total}</h3>
      </div>
    </section>
  );
};
const CartItem = ({
  id,
  name,
  qty,
  imgSrc,
  price,
  increment,
  decrement,
  handleDelete,
}) => {
  return (
    <div>
      <div>
        <img src={imgSrc} alt={name} />
        <div className="titles">
          <h3>{name}</h3>
          <p>${price}</p>
        </div>
      </div>
      <div className="btnContainer">
        <div>
          <button onClick={() => decrement(id)}>-</button>
          <span>{qty}</span>
          <button onClick={() => increment(id)}>+</button>
        </div>
        <button onClick={() => handleDelete(id)}>
          <AiFillDelete />
        </button>
      </div>
    </div>
  );
};

export default Cart;
