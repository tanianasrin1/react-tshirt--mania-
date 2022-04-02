import React from "react";
import TShirt from "../TShirt/TShirt";
import "./Cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let command;
  if (cart.length === 0) {
    command = <p> please add at least one item!!! </p>;
  } else if (cart.length === 1) {
    command = <p> please add more... </p>;
  } else {
    command = (
      <p>
        <small>Thanks for adding item</small>
      </p>
    );
  }
  return (
    <div>
      <h2>This is cart: {cart.length} </h2>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          {/* {tShirt.}  */}
          <button onClick={() => handleRemoveFromCart(tShirt)}>X</button>
        </p>
      ))}
      {command}
      {cart.length !== 4 ? <p>Keep adding</p> : <button>Remove all</button>}
      {cart.length === 3 && (
        <div className="orange">
          <h3>trigonal</h3>
          <p>tin jon k gift kro</p>
        </div>
      )}
      {cart.length ===0 || <p className="orange">YAY! you are buing</p>}

      {cart.length ===4 && <button className="orange">review order</button>}

    </div>
  );
};

export default Cart;
