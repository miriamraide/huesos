"use client";

import { useContext } from "react";
import { Context } from "../../Context/Context";

import Navbar from "./NavBar";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(Context);
  return (
    <>
      <Navbar />
      {cart.length > 0 ? (
        <>
          <CartElements />
          <CartTotal />
        </>
      ) : (
        <h2 className="cart-message-center">Su carrito está vacío</h2>
      )}
    </>
  );
};

export default CartContent;
