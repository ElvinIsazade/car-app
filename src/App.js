import {useState } from "react";
import Cart from "./Cart/Cart";
import Cars from "./components/Cars/Cars";
import Header from "./Layout/Header";

const App = () => {
  const [showCart,setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <div style = {{backgroundColor: "#484747"}}>
      {showCart && <Cart onShowCart ={showCartHandler} onCloseCart = {hideCartHandler} />}
      <Header onShowCart = {showCartHandler} />
      <div>
        <Cars />
      </div>
    </div>
  );
}

export default App;
