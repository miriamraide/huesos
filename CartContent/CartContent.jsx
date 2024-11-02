"use client";

import useContext from "react";
import Context from "../../Context/Context";

import Navbar from "../Navbar/Navbar";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";

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
        <h2 className="txt-xl font-bold">EL carrito está vacío</h2>
      )}
    </>
  );
};

export default CartContent;
