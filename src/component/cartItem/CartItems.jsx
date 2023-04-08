import React from "react";
import "./cartItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function CartItems({ product, removeItemFormCart }) {
  const { id, img, price, name, quantity } = product;
  return (
    <div className="cart-product">
      <div className="card-details-left">
        <img src={img} alt="Order Img" />
        <div className="cart-product-details-brief">
          <h6>{name.substring(0, 20)}</h6>
          <p>
            Price: <strong>{price}</strong>
          </p>
          <p>Order Quantity: {quantity} </p>
        </div>
      </div>

      <button
        className="card-close-right"
        onClick={() => removeItemFormCart(id)}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default CartItems;
