import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Cart({ cart, removeAllCard, children }) {
  console.log(children);
  let total = 0;
  let totalShipping = 0;

  for (const product of cart) {
    total = total + product.price;
    totalShipping = totalShipping + product.shipping;
  }

  const tax = (total * 7) / 100;

  const grandTotal = total + tax + totalShipping;
  return (
    <div className="card-details">
      <h4 className="MuiTypography-h4">Order history</h4>
      <p>Selected Item : {cart.length} </p>
      <p>Total Price : ${total.toFixed(2)}</p>
      <p>Total shipping charge: ${totalShipping}</p>
      <p>Tax : ${tax.toFixed(2)}</p>
      <h3>Grand Total : ${grandTotal.toFixed(2)} </h3>

      <button className="btn" onClick={removeAllCard}>
        Clear card
      </button>
      {children}
    </div>
  );
}

export default Cart;
