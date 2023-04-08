import React, { useEffect, useState } from "react";
import "./shop.css";
import Product from "../product/Product";
import Cart from "../cart/Cart";
import { toast, ToastContainer } from "react-toastify";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";

import ConfirmPopup from "./ConfirmPopup";
import { Link } from "react-router-dom";

function Shop() {
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storeCart = getShoppingCart();

    const saveCart = [];

    // step 1: get id
    for (const id in storeCart) {
      // step 3: find product
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        // step 4: set quantity of product
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;

        // step 5 : add the added product to save card
        saveCart.push(addedProduct);
      }
      // console.log(addedProduct);
    }
    // step 6 : set the cart
    setCart(saveCart);

    // step 2: dependency
  }, [products]);

  // We just provide this function in props
  // how awesome is it
  // use should grape this function in your component props
  const handelAddToCard = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product.id);

    toast.success("Item added to cart!");
  };

  const removeAllCard = () => {
    setShowConfirmPopup(true);
  };

  const handleConfirmRemoveAll = () => {
    setCart([]);
    deleteShoppingCart();
    setShowConfirmPopup(false);

    toast.success("Cart cleared successfully!");
  };

  const handleCancelRemoveAll = () => {
    setShowConfirmPopup(false);
    console.log(setShowConfirmPopup(false));
  };

  return (
    <div className="product-row">
      <div className="product-grid">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handelAddToCard={handelAddToCard}
          ></Product>
        ))}
        <ToastContainer />
      </div>

      <Cart cart={cart} removeAllCard={removeAllCard}>
        <Link to={"/orders"} className="btn">
          Review Order
        </Link>
      </Cart>

      {showConfirmPopup && (
        <>
          <ConfirmPopup
            message="Are you sure you want to clear everything in the cart?"
            onConfirm={handleConfirmRemoveAll}
            onCancel={handleCancelRemoveAll}
          />
        </>
      )}
    </div>
  );
}

export default Shop;
