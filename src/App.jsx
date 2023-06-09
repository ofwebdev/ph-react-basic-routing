import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Header from "./component/header/Header";
import Shop from "./component/shop/Shop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Shop />
      </div>
    </div>
  );
}

export default App;
