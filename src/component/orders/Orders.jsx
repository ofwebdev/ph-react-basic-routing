import React, { useState } from "react";
import Cart from "../cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import CartItems from "../cartItem/CartItems";
import "./order.css";
import { removeFromDb, deleteShoppingCart } from "../../utilities/fakedb";

function Orders() {
  const localStorageCart = useLoaderData();
  const [cart, setCart] = useState(localStorageCart);

  const removeItemFormCart = (id) => {
    const remanding = cart.filter((p) => p.id !== id);
    setCart(remanding);
    removeFromDb(id);
  };

  const removeAllCard = () => {
    setCart([]);
    deleteShoppingCart();
    // console.log("hi");
  };

  return (
    <div>
      <div className="container">
        <div className="order-row">
          {/* <h2>The cart component {cart.length}</h2> */}
          <div className="cart-product-box">
            {cart.map((product) => (
              <CartItems
                key={product.id}
                product={product}
                removeItemFormCart={removeItemFormCart}
              ></CartItems>
            ))}
          </div>

          <div>
            <Cart cart={cart} removeAllCard={removeAllCard}>
              <Link to={"/checkout"} className="btn">
                Checkout
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;
