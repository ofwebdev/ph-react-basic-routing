import { getShoppingCart } from "../utilities/fakedb";

// 1st way
// async function cartDataLoader() {
//   const cardData = await fetch("products.json");
//   const data = await cardData.json();
//   return data;
// }

// export { cartDataLoader };

// 2nd way
export async function cartDataLoader() {
  const cardData = await fetch("products.json");
  const data = await cardData.json();

  const storeCart = getShoppingCart();

  const saveCart = [];

  // step 1: get id
  for (const id in storeCart) {
    // step 3: find product
    const addedProduct = data.find((product) => product.id === id);

    if (addedProduct) {
      // step 4: set quantity of product
      const quantity = storeCart[id];
      addedProduct.quantity = quantity;

      // step 5 : add the added product to save card
      saveCart.push(addedProduct);
    }
    console.log(addedProduct);
  }
  // step 6 : set the cart
  // setCart(saveCart);

  return saveCart;
}

// 3rd way

// async function cartDataLoader() {
//   const cardData = await fetch("products.json");
//   const data = await cardData.json();
//   return data;
// }

// export default cartDataLoader;
