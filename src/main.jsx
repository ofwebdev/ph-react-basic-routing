import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import "react-toastify/dist/ReactToastify.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/layout/Home";
import Shop from "./component/shop/Shop";
import Orders from "./component/orders/Orders";
import Inventory from "./component/inventory/Inventory";
import Login from "./component/login/Login";
import { cartDataLoader } from "./loader/cartDataLoader";
import Checkout from "./component/checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/orders",
        element: <Orders />,
        loader: cartDataLoader,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
